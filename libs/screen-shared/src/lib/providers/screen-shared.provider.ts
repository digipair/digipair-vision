import {
  Entity,
  inject,
  injectable,
  MetaProvider,
  state,
  THREE,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';
import * as md5 from 'md5';
import { v4 } from 'uuid';

function getPathTo(element: Element, root: Element): string {
  if (element.id !== '') return 'id("' + element.id + '")';
  if (element === root) return element.tagName;

  let ix = 0;
  const siblings = (element.parentNode as Element).childNodes;
  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i] as Element;
    if (sibling === element)
      return (
        getPathTo(element.parentNode as Element, root) +
        '/' +
        element.tagName +
        '[' +
        (ix + 1) +
        ']'
      );
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }

  return '';
}

@injectable({
  networked: true,
})
export class ScreenSharedProvider extends MetaProvider {
  @state()
  menuVisible = false;

  @inject()
  playerProvider!: PlayerProvider;

  elementid!: string;

  private streamId!: string;
  private stream: any;

  private clientConnected = () => {
    if (!this.stream) {
      return;
    }
    NAF.connection.adapter.addLocalMediaStream(this.stream, this.streamId);
  };

  override init(): void {
    this.elementid = (md5 as any).default(
      getPathTo(this.el, this.el.sceneEl as Element)
    );
    this.streamId = '';
    this.stream = null;
    document.body.addEventListener('clientConnected', this.clientConnected);
  }

  override remove(): void {
    this.removeScreen();
    document.body.removeEventListener('clientConnected', this.clientConnected);
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  async openDesktop(): Promise<void> {
    this.menuVisible = false;
    this.streamId = v4();
    const positions = this.computeScreenPosition();
    this.playerProvider.addNetworkedElement('meta-screen-shared-desktop', {
      screenid: `${this.elementid}`,
      streamid: this.streamId,
      ...positions,
    });

    const videoEl = this.videoElement();
    this.stream = await navigator.mediaDevices.getDisplayMedia();
    NAF.connection.adapter.addLocalMediaStream(this.stream, this.streamId);
    (videoEl as any).srcObject = this.stream;
  }

  async openWebcam(): Promise<void> {
    this.menuVisible = false;
    const positions = this.computeScreenPosition();
    this.playerProvider.addNetworkedElement('meta-screen-shared-webcam', {
      screenid: `${this.elementid}`,
      ...positions,
    });

    const videoEl = this.videoElement();
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });
    (videoEl as any).srcObject = stream;
  }

  stop(): void {
    this.menuVisible = false;

    if (this.streamId) {
      NAF.connection.adapter.removeLocalMediaStream(this.streamId);
      this.streamId = '';
      this.stream = null;
    }

    const screenEl = this.el.sceneEl?.querySelector(
      `[screenid="${this.elementid}"]`
    ) as Entity;
    this.playerProvider.removeNetworkedElement(
      screenEl.parentElement as Entity
    );
  }

  private computeScreenPosition(): {
    position: string;
    rotation: string;
    scale: string;
  } {
    const position = new THREE.Vector3();
    this.el.object3D.getWorldPosition(position);

    const quaternion = new THREE.Quaternion();
    const rotation = new THREE.Euler();
    this.el.object3D.getWorldQuaternion(quaternion);
    rotation.setFromQuaternion(quaternion);

    const scale = new THREE.Vector3();
    this.el.object3D.getWorldScale(scale);

    return {
      position: `${position.x} ${position.y} ${position.z}`,
      rotation: `${THREE.MathUtils.radToDeg(
        rotation.x
      )} ${THREE.MathUtils.radToDeg(rotation.y)}  ${THREE.MathUtils.radToDeg(
        rotation.z
      )}`,
      scale: `${scale.x} ${scale.y} 1`,
    };
  }

  private videoElement(): Element {
    let videoEl = this.el.sceneEl?.querySelector(
      `#screen-shared-${this.elementid}`
    );

    if (!videoEl) {
      let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
      if (!assets) {
        assets = document.createElement('a-assets');
        this.el.sceneEl?.appendChild(assets);
      }

      videoEl = document.createElement('video');
      videoEl.setAttribute('id', `screen-shared-${this.elementid}`);
      videoEl.setAttribute('playsinline', '');
      assets?.appendChild(videoEl);

      videoEl.addEventListener('loadedmetadata', () => {
        (videoEl as any).play();
      });
    }

    return videoEl;
  }

  private removeScreen() {
    const screenEl = this.el.sceneEl?.querySelector(
      `[screenid="${this.elementid}"]`
    );
    const isMine = screenEl && NAF.utils.isMine(screenEl.parentElement);
    if (isMine) {
      this.stop();
    }

    const videoEl = this.el.sceneEl?.querySelector(
      `#screen-shared-${this.elementid}`
    );
    videoEl?.remove();
  }
}

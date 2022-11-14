import {
  Entity,
  injectable,
  MetaProvider,
  state,
  THREE,
} from '@pinser-metaverse/core';
import { MetaCursor } from './cursor.interface';

@injectable()
export class PlayerProvider extends MetaProvider {
  @state()
  playersound = true;

  @state()
  playermic = true;

  @state()
  playermenu = { visible: false, position: '0 0 0', rotation: '0 0 0' };

  @state()
  customcursor = '';

  customcursorData: any;

  debug!: boolean;
  networked!: {
    serverURL: string;
    adapter: string;
  };

  override init(): void {
    this.debug = false;
    this.networked = {
      serverURL: 'https://networked.pinser-metaverse.com',
      adapter: 'easyrtc',
    };

    let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    if (!assets) {
      assets = document.createElement('a-assets');
      this.el.sceneEl?.appendChild(assets);
    }

    const template = document.createElement('template');
    template.setAttribute('id', 'element-template');
    template.innerHTML = `
      <a-entity meta-element></a-entity>
    `;
    assets?.appendChild(template);

    NAF?.schemas.add({
      template: `#element-template`,
      components: ['position', 'rotation', 'scale', 'meta-element'],
    });
  }

  setAudio(config: any = {}): void {
    (
      this.el.sceneEl?.querySelector(
        'meta-player [meta-avatar][networked-audio-source]'
      ) as Entity
    )?.setAttribute('networked-audio-source', config);
  }

  startCursor(cursor: MetaCursor): void {
    this.customcursorData = cursor.data;
    this.customcursor = cursor.component;
  }

  stopCursor(): void {
    this.customcursorData = null;
    this.customcursor = '';
  }

  setInfo(data: any): void {
    (
      this.el.sceneEl?.querySelector('meta-player [meta-avatar]') as Entity
    )?.setAttribute('meta-avatar', `playerinfo: ${btoa(JSON.stringify(data))}`);
  }

  teleport(position: string, rotation?: string): void {
    this.el.dispatchEvent(
      new CustomEvent('teleport', {
        detail: {
          position,
          rotation,
        },
      })
    );
  }

  toggleMenu(): void {
    if (this.playermenu.visible) {
      this.playermenu = { ...this.playermenu, visible: false };
      return;
    }

    const playerEl = this.el.sceneEl?.querySelector(
      'meta-player > [networked]'
    ) as Entity;
    const cameraEl = this.el.sceneEl?.querySelector(
      'meta-player [meta-avatar]'
    ) as Entity;
    const position = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(position);

    const rotationPlayer = playerEl.getAttribute('rotation');
    const rotationCamera = cameraEl.getAttribute('rotation');

    this.playermenu = {
      position: `${position.x} ${position.y - 0.29} ${position.z}`,
      rotation: `0 ${rotationPlayer.y + rotationCamera.y} 0`,
      visible: true,
    };
  }

  addNetworkedElement(
    element: string,
    attributes: { [key: string]: any } = {},
    id: string | null = null,
    options: {
      editable?: boolean;
      name?: string;
      shape?: string;
      dynamic?: boolean;
      import?: string;
    } = {}
  ): Entity {
    const el = document.createElement('a-entity');

    el.setAttribute('networked', 'template: #element-template');
    el.setAttribute(
      'meta-element',
      `element: ${JSON.stringify(element)}; attributes: ${JSON.stringify(
        btoa(
          JSON.stringify({
            ...attributes,
            position: undefined,
            rotation: undefined,
            scale: undefined,
          })
        )
      )}; options: ${JSON.stringify(btoa(JSON.stringify(options)))};`
    );

    if (id) {
      el.setAttribute('id', id);
    }

    if (attributes['position']) {
      el.setAttribute('position', attributes['position']);
    }

    if (attributes['rotation']) {
      el.setAttribute('rotation', attributes['rotation']);
    }

    if (attributes['scale']) {
      el.setAttribute('scale', attributes['scale']);
    }

    this.el.sceneEl?.appendChild(el);

    return el;
  }

  takeOwnership(el: Element): void {
    if (NAF && NAF.connection.isConnected() && !NAF.utils.isMine(el)) {
      NAF.utils.takeOwnership(el);
    }
  }

  removeNetworkedElement(el: Entity) {
    this.takeOwnership(el);
    el.remove();
  }

  setSound(sound: boolean): void {
    this.setupSound();

    const audioListener = (this.el.sceneEl as any).audioListener;

    if (sound) {
      audioListener.setMasterVolume(1);
    } else {
      audioListener.setMasterVolume(0);
    }

    this.playersound = sound;
  }

  setMic(mic: boolean): void {
    NAF.connection.adapter.enableMicrophone(mic);
    this.playermic = mic;
  }

  private setupSound() {
    const sceneEl: any = this.el.sceneEl;

    if (!sceneEl.audioListener) {
      sceneEl.audioListener = new THREE.AudioListener();
      sceneEl.camera && sceneEl.camera.add(sceneEl.audioListener);
      sceneEl.addEventListener('camera-set-active', (evt: any) => {
        evt.detail.cameraEl.getObject3D('camera').add(sceneEl.audioListener);
      });
    }
  }

  startSession(session: string) {
    const sessionFormated = session.replace(/-/g, '').toLowerCase();

    if (!/^[0-9a-f]{32}$/.test(sessionFormated)) {
      throw new Error('startSession: property "session" not valid');
    }

    setTimeout(async () => {
      const sceneEl = this.el.sceneEl as Entity;
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audio =
        devices.filter(({ kind }) => kind === 'audioinput').length > 0;
      const video =
        devices.filter(({ kind }) => kind === 'videoinput').length > 0;

      sceneEl.setAttribute('networked-scene', {
        serverURL: this.networked.serverURL,
        app: 'pinser-metaverse',
        room: sessionFormated.replace(/-/g, '').toLowerCase(),
        adapter: this.networked.adapter,
        audio,
        video,
        debug: this.debug,
        connectOnLoad: true,
      });
    }, 500);
  }

  stopSession() {
    const sceneEl = this.el.sceneEl as Entity;

    sceneEl.querySelectorAll(':scope > [networked]').forEach((el) => {
      if (NAF.utils.getCreator(el) === NAF.clientId) {
        this.takeOwnership(el);
        el.remove();
      }
    });

    sceneEl.querySelectorAll('[networked]').forEach((el) => {
      this.takeOwnership(el);
    });

    sceneEl.removeAttribute('networked-scene');
  }
}

import {
  Entity,
  injectable,
  MetaProvider,
  state,
  THREE,
} from '@pinser-metaverse/core';

@injectable()
export class PlayerProvider extends MetaProvider {
  @state()
  playersound = true;

  @state()
  playermic = true;

  override init(): void {
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

  setInfo(data: any): void {
    (
      this.el.sceneEl?.querySelector('meta-player [meta-avatar]') as Entity
    )?.setAttribute('meta-avatar', `playerinfo: ${btoa(JSON.stringify(data))}`);
  }

  setAudio(config: any = {}): void {
    (
      this.el.sceneEl?.querySelector(
        'meta-player [meta-avatar][meta-audio-source]'
      ) as Entity
    )?.setAttribute('meta-audio-source', config);

    this.el.sceneEl
      ?.querySelectorAll('[meta-audio-source]')
      .forEach((el: any) => {
        el.components['meta-audio-source'].resetGroup();
      });
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

  addNetworkedElement(
    element: string,
    attributes: { [key: string]: any } = {},
    id: string | null = null
  ) {
    const el = document.createElement('a-entity');

    el.setAttribute('networked', 'template: #element-template');
    el.setAttribute(
      'meta-element',
      `element: ${element}; attributes: ${btoa(
        JSON.stringify({
          ...attributes,
          position: undefined,
          rotation: undefined,
          scale: undefined,
        })
      )}`
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
  }

  removeNetworkedElement(el: Entity) {
    if (NAF && NAF.connection.isConnected() && !NAF.utils.isMine(el)) {
      NAF.utils.takeOwnership(el);
    }
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
}

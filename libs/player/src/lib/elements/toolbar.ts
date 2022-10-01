import {
  customElement,
  html,
  internalProperty,
  MetaElement,
  TemplateResult,
  THREE,
} from '@pinser-metaverse/core';
import './toolbar-button';

@customElement('meta-player-toolbar')
export class PlayerToolbarElement extends MetaElement {
  @internalProperty()
  playersound = true;

  @internalProperty()
  playermic = true;

  private get me(): { username: string; preview: string } {
    return JSON.parse(
      atob(
        (this.el.sceneEl?.querySelector('meta-player [meta-avatar]') as any)
          .components['meta-avatar'].data.playerinfo
      )
    );
  }

  private setSound(sound: boolean): void {
    this.setupSound();

    const audioListener = (this.el.sceneEl as any).audioListener;

    if (sound) {
      audioListener.setMasterVolume(1);
    } else {
      audioListener.setMasterVolume(0);
    }

    this.playersound = sound;
  }

  private setMic(mic: boolean): void {
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

  override render(): TemplateResult {
    return html`
      <a-rounded
        selectable
        width="0.14"
        height="0.05"
        radius="0.025"
        color="#ffffff"
      >
        <meta-player-toolbar-button
          position="0.029 0.025 0.001"
          icon=${this.playersound ? 'volume_up' : 'volume_off'}
          @click=${() => this.setSound(!this.playersound)}
        ></meta-player-toolbar-button>
        <meta-player-toolbar-button
          position="0.062 0.025 0.001"
          icon=${this.playermic ? 'mic' : 'mic_off'}
          @click=${() => this.setMic(!this.playermic)}
        ></meta-player-toolbar-button>

        <a-plane
          color="#d0d0d0"
          position="0.084 0.025 0.001"
          height="0.040"
          width="0.001"
        ></a-plane>

        ${this.me.preview
          ? html`
              <a-circle
                src=${this.me.preview}
                radius="0.017"
                position="0.111 0.025 0.001"
              ></a-circle>
            `
          : html`
              <a-circle
                color="#d0d0d0"
                radius="0.017"
                position="0.111 0.025 0.001"
              >
                <a-text
                  value="me"
                  width="0.23"
                  position="-0.008"
                  color="#ffffff"
                ></a-text>
              </a-circle>
            `}
      </a-rounded>
    `;
  }
}

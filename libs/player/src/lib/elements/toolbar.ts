import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import { PlayerProvider } from '../providers/player.provider';
import './toolbar-button';

@customElement('meta-player-toolbar')
export class PlayerToolbarElement extends MetaElement {
  @inject()
  playerProvider!: PlayerProvider;

  private get me(): { username: string; preview: string } {
    return JSON.parse(
      atob(
        (this.el.sceneEl?.querySelector('meta-player [meta-avatar]') as any)
          .components['meta-avatar'].data.playerinfo
      )
    );
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
          icon=${this.playerProvider.playersound ? 'volume_up' : 'volume_off'}
          @click=${() =>
            this.playerProvider.setSound(!this.playerProvider.playersound)}
        ></meta-player-toolbar-button>
        <meta-player-toolbar-button
          position="0.062 0.025 0.001"
          icon=${this.playerProvider.playermic ? 'mic' : 'mic_off'}
          @click=${() =>
            this.playerProvider.setMic(!this.playerProvider.playermic)}
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
              <meta-icon
                color="#000000"
                position="0.098 0.025 0.001"
                icon="account_circle"
              ></meta-icon>
            `}
      </a-rounded>
    `;
  }
}

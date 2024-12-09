import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@digipair-vision/core';
import '@digipair-vision/design-system';
import { PlayerProvider } from '../player/player.provider';
import { MenuProvider } from './menu.provider';

@customElement('meta-player-menu-side')
export class MenuSideElement extends MetaElement {
  @inject()
  private menuProvider!: MenuProvider;

  @inject()
  private playerProvider!: PlayerProvider;

  override render(): TemplateResult {
    return html`
      <meta-menu-side-profile>
        <meta-button
          content="Pin's"
          position="0.036 0.36 0"
          scale="0.5 0.5 1"
          @click=${() => (this.menuProvider.panel = 'pins')}
        ></meta-button>
        <meta-button
          content="Scene"
          position="0.036 0.30 0"
          scale="0.5 0.5 1"
          @click=${() => (this.menuProvider.panel = 'scene')}
        ></meta-button>

        <a-entity position="0.075 0.03 0">
          <meta-menu-button
            position="0.029 0 0"
            icon=${this.playerProvider.playersound ? 'volume_up' : 'volume_off'}
            @click=${() =>
              this.playerProvider.setSound(!this.playerProvider.playersound)}
          ></meta-menu-button>
          <meta-menu-button
            position="0.062 0 0"
            icon=${this.playerProvider.playermic ? 'mic' : 'mic_off'}
            @click=${() =>
              this.playerProvider.setMic(!this.playerProvider.playermic)}
          ></meta-menu-button>
        </a-entity>
      </meta-menu-side-profile>
    `;
  }
}

import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
  state,
  TemplateResult,
} from '@digipair-vision/core';
import '@digipair-vision/design-system';
import '../../pins/add-pins-cursor';
import { MetaPins } from '../../pins/pins.interface';
import { PlayerProvider } from '../../player/player.provider';

@customElement('meta-player-menu-planel-pins')
export class MenuPanelPinsElement extends MetaElement {
  @property()
  repository!: string;

  @state()
  private pins: MetaPins[] = [];

  @inject()
  private playerProvider!: PlayerProvider;

  private add(pins: MetaPins): void {
    this.playerProvider.toggleMenu();
    this.playerProvider.startCursor({
      component: 'meta-player-menu-add-pins-cursor',
      data: { editable: true, ...pins },
    });
  }

  private async loadPins(repository: string): Promise<void> {
    const response = await fetch(repository);
    this.pins = await response.json();
  }

  override init(): void {
    this.loadPins(this.repository);
  }

  override render(): TemplateResult {
    return html`
      <meta-menu-panel icon="widgets" title="Pin's">
        ${this.pins.map(
          (pin, index) => html`
            <meta-menu-button-image
              position=${`${0.11 + (index % 4) * 0.18} ${
                0.4 - Math.floor(index / 4) * 0.18
              } 0.001`}
              image=${pin.image}
              title=${pin.name}
              @click=${() => this.add(pin)}
            ></meta-menu-button-image>
          `
        )}
      </meta-menu-panel>
    `;
  }
}

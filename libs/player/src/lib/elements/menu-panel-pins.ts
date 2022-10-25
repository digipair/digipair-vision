import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
  state,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import { MetaPins } from '../interfaces/pins.interface';
import { PlayerProvider } from '../providers/player.provider';
import './add-pins-cursor';

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
      component: 'meta-player-add-pins-cursor',
      data: pins,
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
      <meta-menu-panel icon="apps" title="Pin's">
        ${this.pins.map(
          (pin, index) => html`
            <meta-menu-button-image
              position=${`${0.11 + (index % 4) * 0.18} ${
                0.4 - Math.floor(index / 4) * 0.18
              } 0.001`}
              image=${pin.image}
              title=${pin.name}
              actionicon="add"
              actiontext="Add"
              @click=${() => this.add(pin)}
            ></meta-menu-button-image>
          `
        )}
      </meta-menu-panel>
    `;
  }
}

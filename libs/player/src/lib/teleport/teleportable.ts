import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
} from '@digipair-vision/core';
import { PlayerProvider } from '../player/player.provider';

@customElement('meta-teleportable')
export class TeleportableElement extends MetaElement {
  @property({ default: 1 })
  width!: number;

  @property({ default: 1 })
  height!: number;

  @property({ default: '#ffffff' })
  color!: string;

  @inject()
  playerProvider!: PlayerProvider;

  override render() {
    return html`
      <a-plane
        teleportable
        selectable
        placing
        width=${this.width}
        height=${this.height}
        color=${this.color}
        rotation="-90 0 0"
        static-body="shape: none;"
        collision-filter="group: surface;"
        shape=${`shape: box; halfExtents: ${this.width / 2} ${
          this.height / 2
        } 0.001`}
      >
      </a-plane>
    `;
  }
}

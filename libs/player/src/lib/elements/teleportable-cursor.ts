import {
  customElement,
  Entity,
  html,
  inject,
  internalProperty,
  MetaElement,
  nothing,
  property,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '../providers/player.provider';

@customElement('meta-teleportable-cursor')
export class TeleportableCursorElement extends MetaElement {
  @property()
  vrmode!: boolean;

  @property({ default: '#d6d6d6' })
  color!: string;

  @internalProperty()
  cursorvisible = false;

  @internalProperty()
  cursorposition = '0 0 0';

  @inject()
  playerProvider!: PlayerProvider;

  private mousemove = () => {
    if (this.vrmode) {
      if (this.cursorvisible) {
        this.cursorvisible = false;
      }
      return;
    }

    const cursor: any = (this.el.sceneEl as Entity).querySelector('[cursor]');
    const visible =
      cursor.components.raycaster.intersectedEls[0]?.hasAttribute(
        'teleportable'
      );
    let position = '0 0 0';

    if (visible) {
      const { point } = cursor.components.raycaster.rawIntersections[0];
      position = `${point.x} ${point.y + 0.001} ${point.z}`;

      if (position !== this.cursorposition) {
        this.cursorposition = position;
      }

      if (!this.cursorvisible) {
        this.cursorvisible = true;
      }
    } else {
      if (this.cursorvisible) {
        this.cursorvisible = false;
      }
    }
  };

  override init(): void {
    document.addEventListener('mousemove', this.mousemove);
  }

  override remove(): void {
    document.removeEventListener('mousemove', this.mousemove);
  }

  override render() {
    return html`
      ${!this.cursorvisible
        ? nothing
        : html`
            <a-ring
              color=${this.color}
              radius-outer="0.2"
              radius-inner="0.15"
              position=${this.cursorposition}
              rotation="-90 0 0"
            ></a-ring>
          `}
    `;
  }
}

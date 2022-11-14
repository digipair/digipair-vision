import {
  customElement,
  Entity,
  html,
  inject,
  MetaElement,
  nothing,
  property,
  state,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '../player/player.provider';

@customElement('meta-teleportable-cursor')
export class TeleportableCursorElement extends MetaElement {
  @property()
  vrmode!: boolean;

  @property({ default: '#d6d6d6' })
  color!: string;

  @state()
  cursorvisible = false;

  @inject()
  playerProvider!: PlayerProvider;

  private teleport = (event: any) => {
    const cursor: any = (this.el.sceneEl as Entity).querySelector('[cursor]');
    const enable =
      cursor.components.raycaster.intersectedEls[0]?.hasAttribute(
        'teleportable'
      );

    if (!enable) {
      return;
    }

    const { x, y, z } = event.detail.intersection.point;
    this.playerProvider.teleport(`${x} ${y} ${z}`);
  };

  private computeCursorPosition() {
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

    if (visible) {
      const { point } = cursor.components.raycaster.rawIntersections[0];

      this.el.object3D.position.set(point.x, point.y + 0.001, point.z);

      if (!this.cursorvisible) {
        this.cursorvisible = true;
      }
    } else {
      if (this.cursorvisible) {
        this.cursorvisible = false;
      }
    }
  }

  override init(): void {
    const cursor = this.el.sceneEl?.querySelector('[cursor]');

    cursor?.addEventListener('click', this.teleport);
  }

  override tick(): void {
    this.computeCursorPosition();
  }

  override remove(): void {
    const cursor = this.el.sceneEl?.querySelector('[cursor]');

    cursor?.removeEventListener('click', this.teleport);
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
              rotation="-90 0 0"
            ></a-ring>
          `}
    `;
  }
}

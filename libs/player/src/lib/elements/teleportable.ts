import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

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

  private vrmode = false;

  private readonly entervr = () => {
    this.vrmode = true;
    this.requestUpdate();
  };
  private readonly exitvr = () => {
    this.vrmode = false;
    this.requestUpdate();
  };

  override init(): void {
    this.el.sceneEl?.addEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.addEventListener('exit-vr', this.exitvr);
  }

  override remove(): void {
    this.el.sceneEl?.removeEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.removeEventListener('exit-vr', this.exitvr);
  }

  teleport(event: any) {
    const { x, y, z } = event.detail.intersection.point;
    this.playerProvider.teleport(`${x} ${y} ${z}`);
  }

  override render() {
    return html`
      <a-plane
        teleportable
        ?selectable=${!this.vrmode}
        width=${this.width}
        height=${this.height}
        color=${this.color}
        rotation="-90 0 0"
        @click=${(event: any) => this.teleport(event)}
      >
      </a-plane>
    `;
  }
}

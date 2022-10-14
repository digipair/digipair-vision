import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
  state,
  TemplateResult,
  THREE,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

@customElement('meta-teleport')
export class TeleportElement extends MetaElement {
  @property({ default: '#FFFFFF' })
  color!: string;

  @property({ default: 0 })
  rotationx!: number;

  @property({ default: 0 })
  rotationy!: number;

  @property({ default: 0 })
  height!: number;

  @state()
  hover = false;

  @inject()
  playerProvider!: PlayerProvider;

  teleport(height: number, rotationx: number, rotationy: number): void {
    const position = new THREE.Vector3();
    this.el.object3D.getWorldPosition(position);

    const quaternion = new THREE.Quaternion();
    const rotation = new THREE.Euler();
    this.el.object3D.getWorldQuaternion(quaternion);
    rotation.setFromQuaternion(quaternion);

    const x = rotationx;
    const y = (THREE as any).Math.radToDeg(rotation.x) + rotationy;

    this.playerProvider.teleport(
      `${position.x} ${height} ${position.z}`,
      `${x} ${y} 0`
    );
  }

  override render(): TemplateResult {
    return html`
      <a-entity hide-on-enter-ar>
        <a-ring
          color=${this.color}
          radius-outer="0.2"
          radius-inner="0.15"
          position="0 0 0"
          rotation="-90 0 0"
        ></a-ring>

        <a-cylinder
          color=${this.color}
          position="0 0.299 0"
          height="0.6"
          radius="0.2"
          opacity="0.1"
          selectable
          @click=${() =>
            this.teleport(this.height, this.rotationx, this.rotationy)}
          @mouseenter=${() => (this.hover = true)}
          @mouseleave=${() => (this.hover = false)}
          visible=${this.hover}
        >
        </a-cylinder>
      </a-entity>
    `;
  }
}

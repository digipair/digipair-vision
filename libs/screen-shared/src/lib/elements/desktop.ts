import {
  customElement,
  Entity,
  html,
  MetaElement,
  property,
  TemplateResult,
  THREE,
} from '@pinser-metaverse/core';

@customElement('meta-screen-shared-desktop')
export class ScreenSharedDesktopElement extends MetaElement {
  @property()
  screenid!: string;

  @property()
  streamid!: string;

  @property()
  curved!: boolean;

  override init(): void {
    setTimeout(() => this.initTexture(), 500);
  }

  private initTexture() {
    if (!this.curved) {
      return;
    }

    const map = (
      (
        (
          this.el.querySelector(':scope > a-entity') as Entity
        ).object3D.getObjectByProperty('type', 'Mesh') as THREE.Mesh
      )?.material as THREE.MeshStandardMaterial
    ).map;

    if (!map) {
      setTimeout(() => this.initTexture(), 500);
      return;
    }
    map.wrapT = map.wrapS = THREE.RepeatWrapping;
    map.repeat.set(-1, 1);
  }

  override render(): TemplateResult {
    return html`
      <a-entity
        material=${this.curved
          ? `side: back; src: #screen-shared-${this.screenid};`
          : `side: front; src: #screen-shared-${this.screenid};`}
        geometry=${this.curved
          ? `primitive: cylinder; openEnded: true; thetaLength: 46; thetaStart: 157; radius: 2; height: 0.9;`
          : `primitive: plane; width: 1.6; height: 0.9;`}
        position=${this.curved ? `0 0 2` : `0 0 0`}
        networked-video-source=${`streamName: ${this.streamid}`}
      ></a-entity>
    `;
  }
}

import {
  customElement,
  Entity,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@digipair-vision/core';

@customElement('meta-camrender-screen')
export class CamrenderScreenElement extends MetaElement {
  @property({ default: 1.2 })
  width!: number;

  @property({ default: 0.9 })
  height!: number;

  @property({ default: 'meta-camrender' })
  cid!: string;

  override tick(): void {
    const el = this.el.querySelector(
      ':scope > [data-meta-camrender-screen]'
    ) as Entity | null;
    if (!el) {
      return;
    }

    const material = (el.getObject3D('mesh') as any).material;
    if (!material.map) {
      return;
    }
    material.map.needsUpdate = true;
  }

  override render(): TemplateResult {
    return html`
      <a-plane
        data-meta-camrender-screen
        width=${this.width}
        height=${this.height}
        material="src: #${this.cid}; shader: flat;"
      ></a-plane>
    `;
  }
}

import {
  customElement,
  Entity,
  html,
  inject,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import { RouterProvider } from '../providers/router.provider';

@customElement('meta-router-zone')
export class RouterZoneElement extends MetaElement {
  @property({ default: 1 })
  width!: number;

  @property({ default: 1.8 })
  height!: number;

  @property({ default: 1 })
  depth!: number;

  @property()
  path!: string;

  @inject()
  routerProvider!: RouterProvider;

  private collisions({ els }: { els: Entity[]; clearedEls: Entity[] }) {
    if (els.length > 0) {
      this.routerProvider.go(this.path);
    } else {
      this.routerProvider.go('');
    }
  }

  override render(): TemplateResult {
    return html`
      <a-box
        position=${`0 ${this.height / 2} 0`}
        width=${this.width}
        height=${this.height}
        depth=${this.depth}
        static-body
        collision-filter="collidesWith: player;"
        physics-collider
        visible="false"
        @collisions=${({ detail }: any) => this.collisions(detail)}
      ></a-box>
    `;
  }
}

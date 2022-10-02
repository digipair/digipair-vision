import {
  customElement,
  Entity,
  html,
  internalProperty,
  MetaElement,
  nothing,
  property,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';

@customElement('meta-info')
export class InfoElement extends MetaElement {
  @property({ default: '#0062ff' })
  color!: string;

  @property({ default: 2 })
  width!: number;

  @property({ default: 1 })
  height!: number;

  @property({ default: 'info' })
  icon!: string;

  @internalProperty()
  displayed = false;

  private content(): TemplateResult {
    const template = this.el.querySelector(
      ':scope > template[slot="content"]'
    )?.innerHTML;
    return html`${template ? unsafeHTML(template) : nothing}`;
  }

  private toggleMenu({ els }: { els: Entity[]; clearedEls: Entity[] }) {
    if (els.length > 0) {
      this.displayed = true;
    } else {
      this.displayed = false;
    }
  }

  override render(): TemplateResult {
    return html`
      ${this.displayed
        ? nothing
        : html`
            <meta-bubble
              color=${this.color}
              icon="info"
              position=${`0 ${this.height / 2} 0`}
            ></meta-bubble>
          `}
      ${!this.displayed
        ? nothing
        : html`
            <meta-dialog
              position=${`-${this.width / 2} 0 0`}
              width=${this.width}
              height=${this.height}
              color=${this.color}
              icon=${this.icon}
            >
              ${this.content()}
            </meta-dialog>
          `}

      <a-box
        width="1"
        height="1.6"
        depth="5"
        position="0 0.8 2.5"
        static-body
        physics-collider
        visible="false"
        @collisions=${({ detail }: any) => this.toggleMenu(detail)}
      ></a-box>
    `;
  }
}

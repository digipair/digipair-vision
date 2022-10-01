import {
  customElement,
  html,
  internalProperty,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';

@customElement('meta-player-toolbar-button')
export class PlayerToolbarButtonElement extends MetaElement {
  @property()
  icon!: string;

  @internalProperty()
  hover = false;

  override render(): TemplateResult {
    return html`
      <a-circle
        radius="0.015"
        material=${this.hover ? 'color: #d0d0d0;' : 'color: #ffffff;'}
        selectable
        @mouseenter=${() => (this.hover = true)}
        @mouseleave=${() => (this.hover = false)}
      >
        <meta-icon
          color=${this.hover ? '#202020' : '#000000'}
          position="-0.013 0 0"
          icon=${this.icon}
        >
        </meta-icon>
      </a-circle>
    `;
  }
}

import {
    customElement,
    html,
    MetaElement,
    property,
    TemplateResult,
} from '@digipair-xr/core';
import './icon.element';

@customElement('meta-bubble')
export class BubbleElement extends MetaElement {
  @property({ default: '#0062ff' })
  color!: string;

  @property({ default: 'info' })
  icon!: string;

  override render(): TemplateResult {
    return html`
      <a-circle color="#ffffff" radius="0.1">
        <meta-icon
          position="-0.099 0 0.001"
          color=${this.color}
          icon=${this.icon}
          width="8"
        ></meta-icon>
      </a-circle>
    `;
  }
}

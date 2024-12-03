import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@digipair-vision/core';
import { icons } from '../../const/icons.const';

@customElement('meta-icon')
export class UiIconElement extends MetaElement {
  @property()
  icon!: string;

  @property({ default: '#000000' })
  color!: string;

  @property({ default: 1 })
  width!: string;

  override render(): TemplateResult {
    return html`
      <a-text
        value=${icons[this.icon]}
        font="https://assets.digipair-vision.com/fonts/icons/icons.fnt"
        color=${this.color}
        width=${this.width}
        negate="false"
      >
      </a-text>
    `;
  }
}

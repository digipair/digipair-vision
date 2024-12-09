import {
    customElement,
    html,
    MetaElement,
    TemplateResult
} from '@digipair-vision/core';

@customElement('meta-<%= name %>')
export class <%= className %>Element extends MetaElement {
  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}

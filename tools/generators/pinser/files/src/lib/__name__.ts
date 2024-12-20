import {
    customElement,
    html,
    MetaElement,
    TemplateResult
} from '@digipair-xr/core';

@customElement('meta-<%= name %>')
export class <%= className %>Element extends MetaElement {
  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}

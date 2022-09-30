import {
    customElement,
    html,
    MetaElement,
    TemplateResult
} from '@pinser-metaverse/core';

@customElement('meta-<%= name %>')
export class <%= className %>Element extends MetaElement {
  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}

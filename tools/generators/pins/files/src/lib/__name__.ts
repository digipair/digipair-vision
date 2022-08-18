import {
    customElement,
    html,
    MetaElement,
    TemplateResult
} from '@pinser-metaverse/core';

@customElement('<%= domain %>-<%= name %>')
export class <%= className %>Element extends MetaElement {
  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}

import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import './toolbar-default';

@customElement('meta-player-toolbar')
export class PlayerToolbarElement extends MetaElement {
  override render(): TemplateResult {
    const template = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=toolbar]')?.innerHTML;

    return template
      ? html`${unsafeHTML(template)}`
      : html`<meta-player-toolbar-default></meta-player-toolbar-default>`;
  }
}

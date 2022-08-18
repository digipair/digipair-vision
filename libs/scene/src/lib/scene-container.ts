import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

@customElement('meta-scene-container', {
  providers: [PlayerProvider],
})
export class SceneContainerElement extends MetaElement {
  private scene(): TemplateResult {
    return html`${unsafeHTML(
      this.el
        .closest(`meta-scene`)
        .querySelector(':scope > template[slot=scene]')?.innerHTML || ''
    )}`;
  }

  override render(): TemplateResult {
    return html`
      <meta-player></meta-player>

      ${this.scene()}
    `;
  }
}

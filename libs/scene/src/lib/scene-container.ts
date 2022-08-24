import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

@customElement('meta-scene-container', {
  providers: [PlayerProvider],
})
export class SceneContainerElement extends MetaElement {
  @property({ default: false })
  dev!: boolean;

  private scene(): TemplateResult {
    return html`${unsafeHTML(
      this.el
        .closest(`meta-scene`)
        .querySelector(':scope > template[slot=scene]')?.innerHTML || ''
    )}`;
  }

  override render(): TemplateResult {
    return html`
      <meta-player dev=${this.dev}></meta-player>

      ${this.scene()}
    `;
  }
}

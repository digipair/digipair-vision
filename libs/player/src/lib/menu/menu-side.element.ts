import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import { MenuProvider } from './menu.provider';

@customElement('meta-player-menu-side')
export class MenuSideElement extends MetaElement {
  @inject()
  private menuProvider!: MenuProvider;

  override render(): TemplateResult {
    return html`
      <meta-menu-side-profile>
        <meta-button
          content="Pin's"
          position="0.036 0.36 0.001"
          scale="0.5 0.5 1"
          @click=${() => (this.menuProvider.panel = 'pins')}
        ></meta-button>
        <meta-button
          content="Scene"
          position="0.036 0.30 0.001"
          scale="0.5 0.5 1"
          @click=${() => (this.menuProvider.panel = 'scene')}
        ></meta-button>
      </meta-menu-side-profile>
    `;
  }
}

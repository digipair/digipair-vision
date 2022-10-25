import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import './menu-panel-pins';

@customElement('meta-player-menu')
export class MenuElement extends MetaElement {
  private defaultMenu(): TemplateResult {
    const xrMode =
      this.el.sceneEl?.is('vr-mode') || this.el.sceneEl?.is('ar-mode');

    return html`
      <meta-menu
        rotation=${xrMode ? `-10 0 0` : `0 0 0`}
        position=${xrMode ? `-0.53 0 -0.5` : `-0.53 0 -1`}
      >
        <template slot="menu">
          <meta-menu-side-profile>
            <meta-button
              content="Pin's"
              position="0.036 0.36 0.001"
              scale="0.5 0.5 1"
            ></meta-button>
          </meta-menu-side-profile>
        </template>

        <template slot="panel">
          <meta-player-menu-planel-pins repository="https://assets.pinser-metaverse.com/pins/list.json"></meta-player-menu-planel-pins>
        </template>
      </meta-menu>
    `;
  }

  override render(): TemplateResult | null {
    const template = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=menu]')?.innerHTML;

    if (!template) {
      return this.defaultMenu();
    }

    return html`${unsafeHTML(template)}`;
  }
}

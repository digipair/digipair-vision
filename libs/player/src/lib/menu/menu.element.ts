import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
  unsafeHTML,
} from '@digipair-vision/core';
import '@digipair-vision/design-system';
import './menu-panels.element';
import './menu-side.element';
import { MenuProvider } from './menu.provider';

@customElement('meta-player-menu', {
  providers: [MenuProvider],
})
export class MenuElement extends MetaElement {
  private defaultMenu(): TemplateResult {
    return html`
      <meta-menu>
        <template slot="menu">
          <meta-player-menu-side></meta-menu-side>
        </template>

        <template slot="panel">
          <meta-player-menu-panels></meta-menu-panels>
        </template>
      </meta-menu>
    `;
  }

  override render(): TemplateResult {
    const template = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=menu]')?.innerHTML;

    if (!template) {
      return this.defaultMenu();
    }

    return html`${unsafeHTML(template)}`;
  }
}

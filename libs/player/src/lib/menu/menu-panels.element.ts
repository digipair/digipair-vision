import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@digipair-vision/core';
import '@digipair-vision/design-system';
import { MenuProvider } from './menu.provider';
import './pins/menu-panel-pins';
import './scene/menu-panel-scene';

@customElement('meta-player-menu-panels')
export class MenuSideElement extends MetaElement {
  @inject()
  private menuProvider!: MenuProvider;

  override render(): TemplateResult {
    const panels: { [key: string]: TemplateResult } = {
      pins: html`
        <meta-player-menu-planel-pins
          repository="https://assets.digipair-vision.com/pins/list.json"
        ></meta-player-menu-planel-pins>
      `,
      scene: html`<meta-player-menu-planel-scene></meta-player-menu-planel-scene>`,
    };

    return panels[this.menuProvider.panel];
  }
}

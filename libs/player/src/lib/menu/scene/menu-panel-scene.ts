import {
  customElement,
  Entity,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import { PlayerProvider } from '../../player/player.provider';

@customElement('meta-player-menu-planel-scene')
export class MenuPanelSceneElement extends MetaElement {
  @inject()
  private playerProvider!: PlayerProvider;

  private removePins(el: Entity) {
    this.playerProvider.removeNetworkedElement(el);
    this.requestUpdate();
  }

  private getPinsNameFromElement(el: Entity) {
    const component = el.components['meta-element'] as any;
    const options = JSON.parse(
      decodeURIComponent(atob(component.data.options))
    );

    return options.name;
  }

  override render(): TemplateResult {
    const pins = [
      ...(this.el.sceneEl?.querySelectorAll(
        ':scope > [meta-element][editable]'
      ) as any),
    ];

    return html`
      <meta-menu-panel icon="engineering" title="Scene">
        ${pins.length <= 0
          ? html`<a-text
              value="no pin's available"
              color="#202020"
              align="center"
              width="0.4"
              position="0.4 0.4 0.001"
            ></a-text>`
          : pins.map(
              (el, index) => html`
                <a-rounded
                  color="#ffffff"
                  width="0.75"
                  height="0.05"
                  radius="0.025"
                  position="0.025 ${0.4 - 0.06 * index} 0.001"
                >
                  <a-text
                    value=${this.getPinsNameFromElement(el)}
                    color="#202020"
                    align="left"
                    width="0.4"
                    position="0.054 0.025 0.001"
                  ></a-text>
                  <meta-menu-button
                    icon="delete"
                    position="0.72 0.025 0"
                    @click=${() => this.removePins(el)}
                  ></meta-menu-button>
                </a-rounded>
              `
            )}
      </meta-menu-panel>
    `;
  }
}

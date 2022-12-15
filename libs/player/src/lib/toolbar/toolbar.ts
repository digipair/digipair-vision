import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import '@pinser-metaverse/mesh';
import { PlayerProvider } from '../player/player.provider';

@customElement('meta-player-toolbar')
export class PlayerToolbarElement extends MetaElement {
  @inject()
  playerProvider!: PlayerProvider;

  private toggleMenu(): void {
    this.playerProvider.toggleMenu();
  }

  private stopCursor(): void {
    this.playerProvider.stopCursor();
  }

  override render(): TemplateResult {
    return html`
      <a-box
        opacity="0"
        position="0 0.02 0"
        rotation="0 -45 0"
        scale="0.02 0.02 0.02"
        selectable
        @click=${() => this.toggleMenu()}
        animation__mouseenter="property: scale; to: 0.025 0.025 0.025; startEvents: mouseenter; dur: 500; easing: easeOutElastic"
        animation__mouseleave="property: scale; to: 0.02 0.02 0.02; startEvents: mouseleave; dur: 500; easing: easeOutElastic"
      >
        <meta-logo></meta-logo>
      </a-box>
    `;
  }
}

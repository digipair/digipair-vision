import {
  customElement,
  html,
  inject,
  MetaElement,
  nothing,
  property,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

@customElement('meta-scene-container', {
  providers: [PlayerProvider],
})
export class SceneContainerElement extends MetaElement {
  @property()
  session!: string;

  @property()
  server!: string;

  @property()
  adapter!: string;

  @property()
  development!: boolean;

  @inject()
  playerProvider!: PlayerProvider;

  override init(): void {
    if (this.session) {
      this.startSession();
    }
  }

  private startSession() {
    this.playerProvider.debug = this.development;
    this.playerProvider.networked = {
      serverURL: this.server,
      adapter: this.adapter,
    };

    this.playerProvider.startSession(this.session);
  }

  private scene(): TemplateResult {
    const scene = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=scene]');

    return html`${!scene ? nothing : unsafeHTML(scene.innerHTML)}`;
  }

  override render(): TemplateResult {
    this.playerProvider.debug = this.development;
    this.playerProvider.networked = {
      serverURL: this.server,
      adapter: this.adapter,
    };

    return html`
      <meta-player></meta-player>

      ${this.scene()}
    `;
  }
}

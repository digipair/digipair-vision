import {
  customElement,
  Entity,
  html,
  inject,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';

@customElement('meta-sound-context')
export class SoundContextElement extends MetaElement {
  @property({ default: 'shape: box;' })
  element!: string;

  @property()
  group!: string;

  @inject()
  playerProvider!: PlayerProvider;

  private collisions({ els }: { els: Entity[]; clearedEls: Entity[] }) {
    if (els.length > 0) {
      this.playerProvider.setAudio({ group: this.group, positional: false });
    } else {
      this.playerProvider.setAudio({ group: 'default', positional: true });
    }
  }

  override render(): TemplateResult {
    return html`
      <a-entity
        static-body
        geometry=${this.element}
        physics-collider
        visible="false"
        @collisions=${({ detail }: any) => this.collisions(detail)}
      ></a-entity>
    `;
  }
}

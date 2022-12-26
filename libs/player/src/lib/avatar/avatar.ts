import {
  customElement,
  Entity,
  html,
  MetaElement,
  property,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import './logo';

@customElement('meta-avatar')
export class AvatarElement extends MetaElement {
  @property({ default: {} })
  playerinfo!: string;

  private defaultAvatar(): TemplateResult {
    return html` <meta-logo
        scale="0.25 0.25 0.25"
        position="0 -0.2 0.2"
        rotation="-22.5 -45 22.5"
      ></meta-logo>
      <a-entity class="face" position="0 -0.05 .25">
        <a-sphere
          class="eye"
          shadow
          color="white"
          position="0.06 0.05 -0.16"
          scale="0.04 0.04 0.04"
        >
          <a-sphere
            class="pupil"
            color="black"
            position="0 0 -1"
            scale="0.2 0.2 0.2"
          ></a-sphere>
        </a-sphere>
        <a-sphere
          class="eye"
          shadow
          color="white"
          position="-0.06 0.05 -0.16"
          scale="0.04 0.04 0.04"
        >
          <a-sphere
            class="pupil"
            color="black"
            position="0 0 -1"
            scale="0.2 0.2 0.2"
          ></a-sphere>
        </a-sphere>
      </a-entity>`;
  }

  override render(): TemplateResult | null {
    let el: Entity | null;

    if (this.el.hasAttribute('camera')) {
      return null;
    }

    // get and update the custom avatar if exists
    el = this.el.querySelector('[playerinfo]');
    if (el) {
      el.setAttribute('playerinfo', this.playerinfo);
      return null;
    }

    const template = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=avatar]')?.innerHTML;

    if (!template) {
      return this.defaultAvatar();
    }

    el = document.createElement('a-entity');
    el.innerHTML = template;
    el.querySelector(':scope > *')?.setAttribute('playerinfo', this.playerinfo);

    return html`${unsafeHTML(el.innerHTML)}`;
  }
}

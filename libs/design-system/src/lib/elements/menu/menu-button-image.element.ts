import {
  customElement,
  html,
  MetaElement,
  property,
  state,
  TemplateResult,
} from '@pinser-metaverse/core';
import '../common/icon.element.ts';

@customElement('meta-menu-button-image')
export class MenuButtonImage extends MetaElement {
  @property()
  image!: string;

  @property()
  title!: string;

  @property()
  actionicon!: string;

  @property()
  actiontext!: string;

  @state()
  private hover = false;

  @state()
  private opacity = 0.8;

  override render(): TemplateResult {
    return html`<a-rounded
        position="-0.08 -0.06 0"
        width="0.16"
        height="0.12"
        top-left-radius="0.025"
        top-right-radius="0.025"
        bottom-left-radius="0"
        bottom-right-radius="0"
        material=${`src: ${this.image}; repeat: 6.2 8.2;`}
        selectable
        @mouseenter=${() => (this.hover = true)}
        @mouseleave=${() => (this.hover = false)}
        @mousedown=${() => (this.opacity = 0.5)}
        @mouseup=${() => (this.opacity = 0.8)}
      ></a-rounded>
      <a-rounded
        position="-0.08 -0.10 0"
        width="0.16"
        height="0.04"
        color="#ffffff"
        top-left-radius="0"
        top-right-radius="0"
        bottom-left-radius="0.025"
        bottom-right-radius="0.025"
      >
        <a-text
          position="0.08 0.02 0.001"
          width="0.35"
          align="center"
          color="#202020"
          value=${this.title}
        ></a-text>
      </a-rounded>

      <a-entity visible=${this.hover}>
        <a-rounded
          width="0.16"
          height="0.12"
          color="#202020"
          opacity=${this.opacity}
          position="-0.08 -0.06 0.001"
          top-left-radius="0.025"
          top-right-radius="0.025"
          bottom-left-radius="0"
          bottom-right-radius="0"
        ></a-rounded>
        <meta-icon
          icon=${this.actionicon}
          color="#ffffff"
          position="-0.045 0 0.002"
        ></meta-icon>
        <a-text
          value=${this.actiontext}
          color="#ffffff"
          width="0.35"
          position="-0.013 0.001 0.002"
        ></a-text>
      </a-entity>`;
  }
}

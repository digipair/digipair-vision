import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import '../common/icon.element';

@customElement('meta-menu-button-image')
export class MenuButtonImage extends MetaElement {
  @property()
  image!: string;

  @property()
  title!: string;

  override render(): TemplateResult {
    return html`
      <a-box
        width="0.16"
        height="0.16"
        depth="0.001"
        opacity="0"
        selectable
        animation__mouseenter="property: position; to: 0 0 0.01; startEvents: mouseenter; dur: 500; easing: easeOutElastic"
        animation__mouseleave="property: position; to: 0 0 0; startEvents: mouseleave; dur: 500; easing: easeOutElastic"
        animation__mouseclick="property: position; to: 0 0 0; startEvents: click; dur: 500; easing: easeOutElastic"
      >
        <a-rounded
          position="-0.08 -0.04 0"
          width="0.16"
          height="0.12"
          top-left-radius="0.025"
          top-right-radius="0.025"
          bottom-left-radius="0"
          bottom-right-radius="0"
          material=${`src: ${this.image}; repeat: 6.2 8.2;`}
        ></a-rounded>
        <a-rounded
          position="-0.08 -0.08 0"
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
      </a-box>
    `;
  }
}

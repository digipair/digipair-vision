import {
    customElement,
    html,
    MetaElement,
    nothing,
    property,
    state,
    TemplateResult,
} from '@digipair-xr/core';
import './icon.element';

const BACKGROUND = '#0062ff';

@customElement('meta-button')
export class ButtonElement extends MetaElement {
  @property({ default: '' })
  content!: string;

  @property({ default: '' })
  icon!: string;

  @property({ default: 0.332 })
  width!: number;

  @state()
  private backgroundcolor = BACKGROUND;

  override render(): TemplateResult {
    return html`
      <a-rounded
        selectable
        radius="0.045"
        position="0 0 0.001"
        width=${this.width}
        height="0.082"
        color=${this.backgroundcolor}
        animation__mouseenter="property: position; to: 0 0 0.01; startEvents: mouseenter; dur: 500; easing: easeOutElastic"
        animation__mouseleave="property: position; to: 0 0 0.005; startEvents: mouseleave; dur: 500; easing: easeOutElastic"
        animation__mouseclick="property: position; to: 0 0 0.005; startEvents: click; dur: 500; easing: easeOutElastic"
      >
        ${!this.icon
          ? nothing
          : html`
              <meta-icon
                icon=${this.icon}
                color="white"
                width="2"
                position="0.027 0.041 0"
              ></meta-icon>
            `}
        ${!this.content
          ? nothing
          : html`
              <a-text
                value=${this.content}
                align="center"
                anchor="center"
                color="white"
                position=${`${!this.icon ? 0.175 : 0.19} 0.041 0`}
                width="0.940"
              ></a-text>
            `}
      </a-rounded>
    `;
  }
}

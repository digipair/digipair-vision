import {
    customElement,
    html,
    internalProperty,
    MetaElement,
    nothing,
    property,
    TemplateResult,
  } from '@pinser-metaverse/core';
  import './icon';
  
  const BACKGROUND = '#0062ff';
  const HOVER = '#3381ff';
  const SELECTED = '#75aaff';
  
  @customElement('meta-button')
  export class ButtonElement extends MetaElement {
    @property({ default: '' })
    content!: string;
  
    @property({ default: '' })
    icon!: string;
  
    @property({ default: 0.332 })
    width!: number;
  
    @internalProperty()
    private backgroundcolor = BACKGROUND;
  
    override render(): TemplateResult {
      return html`
        <a-rounded
          selectable
          radius="0.045"
          position="0 0 0.005"
          width=${this.width}
          height="0.082"
          color=${this.backgroundcolor}
          @mousedown=${() => (this.backgroundcolor = SELECTED)}
          @mouseup=${() => (this.backgroundcolor = HOVER)}
          @mouseenter=${() => (this.backgroundcolor = HOVER)}
          @mouseleave=${() => (this.backgroundcolor = BACKGROUND)}
        >
          ${!this.icon
            ? nothing
            : html`
            <design-system-icon icon=${this.icon} color="white" width="2" position="0.027 0.041 0"></icon>
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
  
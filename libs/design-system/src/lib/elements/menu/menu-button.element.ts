import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import '../common/icon.element';

@customElement('meta-menu-button')
export class MenuButtonButtonElement extends MetaElement {
  @property()
  icon!: string;

  override render(): TemplateResult {
    return html`
      <a-circle
        position="-0.013 0 0.001"
        radius="0.015"
        color="#d0d0d0"
        animation__mouseenter="property: position; to: 0 0 0.005; startEvents: mouseenter; dur: 500; easing: easeOutElastic"
        animation__mouseleave="property: position; to: 0 0 0; startEvents: mouseleave; dur: 500; easing: easeOutElastic"
        animation__mouseclick="property: position; to: 0 0 0; startEvents: click; dur: 500; easing: easeOutElastic"
        selectable
      >
        <meta-icon color="#202020" position="-0.013 0 0" icon=${this.icon}>
        </meta-icon>
      </a-circle>
    `;
  }
}

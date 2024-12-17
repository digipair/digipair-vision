import {
    customElement,
    html,
    MetaElement,
    TemplateResult,
} from '@digipair-xr/core';
import './logo-box';

@customElement('meta-logo')
export class LogoElement extends MetaElement {
  public override render(): TemplateResult {
    return html`
      <meta-logo-box position="-0.5 -0.5 -0.5">
        <meta-logo-box
          scale="0.5 0.5 0.5"
          position="0.25 0.25 0.25"
          opacity="1"
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
        ></meta-logo-box>
      </meta-logo-box>
    `;
  }
}

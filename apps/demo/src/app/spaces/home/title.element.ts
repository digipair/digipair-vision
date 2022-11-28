import {
  customHtmlElement,
  html,
  injectHtml,
  MetaHtmlElement,
} from '@pinser-metaverse/core';
import { PinserProvider } from '../../pinser.provider';

@customHtmlElement('home-title')
export class HomeSpaceElement extends MetaHtmlElement {
  @injectHtml()
  pinserProvider: PinserProvider;

  override render() {
    return html`
      <section class="container" style="color: #ffffff;">
        <p>Welcome in</p>
        <h1>
          The visible part<br />
          of web 3.0
        </h1>
        <p><br /></p>
        <button
          class="btn btn-lg btn-primary"
          @click=${() => this.pinserProvider.go('/experiences/')}
        >
          Live your experiences
        </button>
      </section>
    `;
  }
}

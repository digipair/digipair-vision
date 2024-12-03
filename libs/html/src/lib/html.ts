import { customElement, MetaElement, property } from '@digipair-vision/core';
import { Web2VR } from './web2vr/web2vr';

@customElement('meta-html')
export class HtmlElement extends MetaElement {
  @property({ default: '1024px;' })
  width!: string;

  @property({ default: '' })
  style!: string;

  private htmlContainer!: Element;

  override init(): void {
    const template = this.el.querySelector(':scope > template')?.innerHTML;

    if (!template) {
      return;
    }

    const container = (this.htmlContainer =
      document.createElement('div')) as any;
    container.setAttribute('meta-html-container', '');
    container.setAttribute(
      'style',
      `filter: opacity(0); z-index: -1; position: absolute; top: 0; left: 0; width:${this.width}; ${this.style}`
    );
    container.innerHTML = template;
    container.__META_ELEMENT_INSTANCE__ = this;
    document.body.appendChild(container);

    setTimeout(() => {
      const web2vr = new Web2VR(container, { parentElement: this.el });
      web2vr.start();
    }, 1);
  }

  override remove(): void {
    this.htmlContainer.remove();
  }
}

import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';

@customElement('meta-element')
export class ElementElement extends MetaElement {
  @property()
  element!: string;

  @property()
  import!: string;

  @property({ default: 'e30=' })
  attributes!: string;

  override init(): void {
    if (this.import) {
      fetch(this.import);
    }
  }

  public override render(): TemplateResult | null {
    if (!this.element || !this.attributes) {
      return null;
    }

    const attributes = JSON.parse(atob(this.attributes));
    return html`${unsafeHTML(
      `<${this.element} ${Object.getOwnPropertyNames(attributes)
        .map((property) => `${property}="${attributes[property]}"`)
        .join(' ')}></${this.element}>`
    )}`;
  }
}

import {
  customElement,
  html,
  inject,
  MetaElement,
  state,
  TemplateResult,
  unsafeHTML,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '../player/player.provider';

declare const NAF: any;

@customElement('meta-element')
export class ElementElement extends MetaElement {
  @state()
  element!: string;

  @state()
  attributes: any = {};

  @state()
  options: any = {};

  @inject()
  private playerProvider!: PlayerProvider;

  private template!: string;

  private updateOptions(editing: boolean): void {
    const options = this.options;
    const type = 'static';

    if (!options.dynamic && this.el.getAttribute('body').type !== type) {
      this.el.setAttribute('body', { type });
    }

    this.options = { ...options, editing };
  }

  override init(): void {
    const options = this.options;

    if (options.import) {
      import(options.import);
    }

    if (options.editable) {
      this.el.setAttribute('editable', '');
      this.el.addEventListener('grab-start', () => {
        this.playerProvider.takeOwnership(this.el);
        this.updateOptions(true);
      });
      this.el.addEventListener('grab-end', () => {
        this.updateOptions(false);
      });
    }
  }

  public override render(): TemplateResult | null {
    if (!this.element || !this.attributes) {
      return null;
    }

    const attributes = this.attributes;
    const options = this.options;

    if ((options.editable && !options.editing) || NAF.utils.isMine(this.el)) {
      const type =
        options.dynamic || options.editing
          ? 'type: dynamic; shape: none;'
          : 'type: static; shape: none;';

      !this.el.hasAttribute('grabbable') &&
        this.el.setAttribute('grabbable', '');
      !this.el.hasAttribute('stretchable') &&
        this.el.setAttribute('stretchable', '');
      (!this.el.hasAttribute('body') ||
        this.el.getAttribute('body').type !== type) &&
        this.el.setAttribute('body', type);
      !this.el.hasAttribute('shape') &&
        this.el.setAttribute('shape', options.shape);
      !this.el.hasAttribute('collision-filter') &&
        this.el.setAttribute(
          'collision-filter',
          'collidesWith: hand, surface;'
        );
    } else {
      this.el.hasAttribute('grabbable') && this.el.removeAttribute('grabbable');
      this.el.hasAttribute('stretchable') &&
        this.el.removeAttribute('stretchable');
      this.el.hasAttribute('body') && this.el.removeAttribute('body');
      this.el.hasAttribute('shape') && this.el.removeAttribute('shape');
      this.el.hasAttribute('collision-filter') &&
        this.el.removeAttribute('collision-filter');
    }

    const template = `<${this.element} ${Object.getOwnPropertyNames(attributes)
      .map((property) => `${property}="${attributes[property]}"`)
      .join(' ')}></${this.element}>`;

    if (this.template === template) {
      return null;
    }
    this.template = template;

    return html`${unsafeHTML(this.template)}`;
  }
}

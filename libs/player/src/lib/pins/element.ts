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

@customElement('meta-element')
export class ElementElement extends MetaElement {
  @state()
  element!: string;

  @state()
  attributes = 'e30=';

  @state()
  options = 'e30=';

  @inject()
  private playerProvider!: PlayerProvider;

  private template!: string;

  private updateOptions(options: { dynamic: boolean }): void {
    const component = this.el.components['grabbable'] as any;
    const type = 'static';

    if (!options.dynamic && this.el.getAttribute('body').type !== type) {
      this.el.setAttribute('body', { type });
    }

    setTimeout(() => {
      const old = JSON.parse(atob(this.options));
      const options = { editing: component['grabbed'] };

      this.options = btoa(JSON.stringify({ ...old, ...options }));
    }, 1);
  }

  override init(): void {
    const options = JSON.parse(atob(this.options));

    if (options.import) {
      import(options.import);
    }

    if (options.editable) {
      this.el.setAttribute('editable', '');
      this.el.addEventListener('grab-start', () => {
        this.playerProvider.takeOwnership(this.el);
        this.updateOptions(options);
      });
      this.el.addEventListener('grab-end', () => {
        this.updateOptions(options);
      });
    }
  }

  public override render(): TemplateResult | null {
    if (!this.element || !this.attributes) {
      return null;
    }

    const attributes = JSON.parse(atob(this.attributes));
    const options = JSON.parse(atob(this.options));

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

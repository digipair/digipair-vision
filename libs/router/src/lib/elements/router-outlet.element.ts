import {
    customElement,
    Entity,
    html,
    inject,
    MetaElement,
    property,
    TemplateResult,
} from '@digipair-xr/core';
import { RouteProvider } from '../providers/route.provider';
import { RouterProvider } from '../providers/router.provider';

@customElement('meta-router-outlet', {
  providers: [RouteProvider],
})
export class RouterOutletElement extends MetaElement {
  @property({
    default: 'default',
  })
  outlet!: string;

  @inject()
  routerProvider!: RouterProvider;

  @inject()
  routeProvider!: RouteProvider;

  private loaded(target: Entity) {
    const router = this.routerProvider.createRouter(target, this.outlet);
    this.routeProvider.setRouter(router, this.outlet);
  }

  override render(): TemplateResult {
    return html`<a-entity
      @loaded=${({ target }: { target: Entity }) => this.loaded(target)}
    ></a-entity>`;
  }
}

import {
  inject,
  injectable,
  MetaProvider,
  state,
} from '@pinser-metaverse/core';
import { RouterProvider } from '@pinser-metaverse/router';

@injectable({ networked: true })
export class PinserProvider extends MetaProvider {
  @state()
  route = '';

  @inject()
  routerProvider: RouterProvider;

  override update() {
    this.routerProvider.go(this.route);
  }

  go(route: string) {
    this.route = route;
  }
}

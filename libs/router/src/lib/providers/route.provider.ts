import { injectable, MetaProvider } from '@pinser-metaverse/core';
import { IndexedParams, Router, RouterLocation } from '@vaadin/router';

@injectable()
export class RouteProvider extends MetaProvider {
  private routers!: { [key: string]: Router };

  override init(): void {
    this.routers = {};
  }

  setRouter(router: Router, outlet: string) {
    this.routers[outlet] = router;
  }

  location(outlet = 'default'): RouterLocation {
    return this.routers[outlet].location;
  }

  params(outlet = 'default'): IndexedParams {
    return this.routers[outlet].location.params;
  }
}

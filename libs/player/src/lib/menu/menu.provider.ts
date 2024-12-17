import { injectable, MetaProvider, state } from '@digipair-xr/core';

@injectable()
export class MenuProvider extends MetaProvider {
  @state()
  panel = 'pins';
}

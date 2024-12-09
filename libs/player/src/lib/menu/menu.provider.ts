import { injectable, MetaProvider, state } from '@digipair-vision/core';

@injectable()
export class MenuProvider extends MetaProvider {
  @state()
  panel = 'pins';
}

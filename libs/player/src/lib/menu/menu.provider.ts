import { injectable, MetaProvider, state } from '@pinser-metaverse/core';

@injectable()
export class MenuProvider extends MetaProvider {
    @state()
    panel = 'pins';
}

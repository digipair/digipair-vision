import { Entity, injectable, MetaProvider } from '@pinser-metaverse/core';

@injectable()
export class PlayerProvider extends MetaProvider {
  set(data: any): void {
    (this.el.sceneEl?.querySelector('[camera]') as Entity)?.setAttribute(
      'meta-avatar',
      `playerinfo: ${btoa(JSON.stringify(data))}`
    );
  }

  teleport(position: string, rotation: string) {
    this.el.dispatchEvent(
      new CustomEvent('teleport', {
        detail: {
          position,
          rotation,
        },
      })
    );
  }
}

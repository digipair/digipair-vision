import { Entity, injectable, MetaProvider } from '@pinser-metaverse/core';

@injectable()
export class PlayerProvider extends MetaProvider {
  override init(): void {
    let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    if (!assets) {
      assets = document.createElement('a-assets');
      this.el.sceneEl?.appendChild(assets);
    }

    const template = document.createElement('template');
    template.setAttribute('id', 'element-template');
    template.innerHTML = `
      <a-entity meta-element></a-entity>
    `;
    assets?.appendChild(template);

    NAF?.schemas.add({
      template: `#element-template`,
      components: ['position', 'rotation', 'scale', 'meta-element'],
    });
  }

  set(data: any): void {
    (this.el.sceneEl?.querySelector('[camera]') as Entity)?.setAttribute(
      'meta-avatar',
      `playerinfo: ${btoa(JSON.stringify(data))}`
    );
  }

  teleport(position: string, rotation?: string) {
    this.el.dispatchEvent(
      new CustomEvent('teleport', {
        detail: {
          position,
          rotation,
        },
      })
    );
  }

  addNetworkedElement(
    element: string,
    attributes: { [key: string]: any } = {},
    id: string | null = null
  ) {
    const el = document.createElement('a-entity');

    el.setAttribute('networked', 'template: #element-template');
    el.setAttribute(
      'meta-element',
      `element: ${element}; attributes: ${btoa(
        JSON.stringify({
          ...attributes,
          position: undefined,
          rotation: undefined,
          scale: undefined,
        })
      )}`
    );

    if (id) {
      el.setAttribute('id', id);
    }

    if (attributes['position']) {
      el.setAttribute('position', attributes['position']);
    }

    if (attributes['rotation']) {
      el.setAttribute('rotation', attributes['rotation']);
    }

    if (attributes['scale']) {
      el.setAttribute('scale', attributes['scale']);
    }

    this.el.sceneEl?.appendChild(el);
  }

  removeNetworkedElement(el: Element) {
    if (NAF && NAF.connection.isConnected() && !NAF.utils.isMine(el)) {
      NAF.utils.takeOwnership(el);
    }
    el.remove();
  }
}

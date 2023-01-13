import {
  customElement,
  Entity,
  MetaElement,
  property,
  THREE,
} from '@pinser-metaverse/core';

function getPathTo(element: Element, root: Element): string {
  if (element.id !== '') return 'id("' + element.id + '")';
  if (element === root) return element.tagName;

  let ix = 0;
  const siblings = (element.parentNode as Element).childNodes;
  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i] as Element;
    if (sibling === element)
      return (
        getPathTo(element.parentNode as Element, root) +
        '/' +
        element.tagName +
        '[' +
        (ix + 1) +
        ']'
      );
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }

  return '';
}

function kebabCase(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

@customElement('meta-mesh-shared')
export class MeshSharedElement extends MetaElement {
  @property()
  object!: string;

  private meshChanged = (event: any) => {
    if (!event.target.contains(this.el) || event.target === this.el) {
      return;
    }

    this.updateMesh(event.detail.object);
  };

  private get parentEl(): Entity | null | undefined {
    return this.el.parentElement?.closest(
      `meta-mesh, meta-spline, a-gltf-model, a-obj-model`
    );
  }

  override init(): void {
    const parentEl = this.parentEl;

    if (parentEl) {
      const mesh = parentEl.object3D;
      this.updateMesh(mesh);

      parentEl.addEventListener('object3dset', this.meshChanged);
    }
  }

  override remove(): void {
    this.parentEl?.removeEventListener('object3dset', this.meshChanged);
  }

  override update(): void {
    const parentEl = this.parentEl;

    if (parentEl) {
      const mesh = parentEl.object3D;
      this.updateMesh(mesh);
    }
  }

  private updateMesh(parentMesh: THREE.Object3D<THREE.Event>) {
    const mesh = !this.object
      ? parentMesh
      : (parentMesh?.getObjectByName(this.object) as THREE.Object3D<Event>);

    if (!mesh) return;
    this.el.setObject3D('mesh', mesh);

    const localPosition = this.el.object3D.children[0].position;
    const scale = new THREE.Vector3();
    this.el.object3D.getWorldScale(scale);
    const box = new THREE.Box3();
    box.setFromObject(this.el.object3D.children[0]);
    const worldSize = new THREE.Vector3();
    box.getSize(worldSize);
    const localSize = {
      x: worldSize.x / scale.x,
      y: worldSize.y / scale.y,
      z: worldSize.z / scale.z,
    };

    this.el.setAttribute(
      'meta-element',
      `attributes: ${btoa(
        encodeURIComponent(JSON.stringify({}))
      )}; options: ${btoa(
        encodeURIComponent(
          JSON.stringify({
            editable: true,
            shape: `shape: box; halfExtents: ${localSize.x / 2} ${
              localSize.y / 2
            } ${localSize.z / 2}; offset: ${localPosition.x} ${
              localPosition.y
            } ${localPosition.z};`,
            dynamic: false,
          })
        )
      )};`
    );

    this.el.setAttribute(
      'networked',
      `template: #element-template; persistent: true; owner: scene; networkId: ${kebabCase(
        getPathTo(this.el, this.el.sceneEl as Element)
      )};`
    );
  }
}

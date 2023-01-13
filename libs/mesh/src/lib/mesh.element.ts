import {
  customElement,
  Entity,
  MetaElement,
  property,
} from '@pinser-metaverse/core';

@customElement('meta-mesh')
export class MeshElement extends MetaElement {
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
  }
}

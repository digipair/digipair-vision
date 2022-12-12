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

  override init(): void {
    const mesh = (this.el.parentElement as Entity).object3D;
    this.updateMesh(mesh);

    this.el.parentElement?.addEventListener('object3dset', this.meshChanged);
  }

  override remove(): void {
    this.el.parentElement?.removeEventListener('object3dset', this.meshChanged);
  }

  override update(): void {
    const mesh = (this.el.parentElement as Entity).object3D;
    this.updateMesh(mesh);
  }

  private updateMesh(parentMesh: THREE.Object3D<THREE.Event>) {
    const mesh = parentMesh?.getObjectByName(
      this.object
    ) as THREE.Object3D<Event>;

    if (!mesh) return;
    this.el.setObject3D('mesh', mesh);
  }
}

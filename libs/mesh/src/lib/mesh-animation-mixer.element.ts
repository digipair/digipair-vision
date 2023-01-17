import { customElement, Entity, property } from '@pinser-metaverse/core';
import { MeshCommon } from './mesh.common';

@customElement('meta-mesh-animation-mixer')
export class MeshAnimationMixerElement extends MeshCommon {
  @property()
  object!: string;

  @property({ default: false })
  shared!: boolean;

  @property()
  url!: string;

  @property()
  mixer!: string;

  @property({ default: 'AuxScene' })
  origin!: string;

  private async initialization(url: string): Promise<void> {
    if (!url) {
      return;
    }

    await this.addAnimations(url);
  }

  async addAnimations(url: string) {
    const animationsEl = await this.getAnimationsElement(url);

    this.el.getObject3D('mesh').animations =
      animationsEl.object3D.getObjectByName(this.origin)?.animations || [];
  }

  private getAnimationsElement(url: string): Promise<Entity> {
    return new Promise((resolve) => {
      let animationsEl: Entity | null | undefined =
        this.el.sceneEl?.querySelector(
          `:scope > [data-meta-mesh-animation-mixer][url="${url}"]`
        );

      if (!animationsEl) {
        animationsEl = document.createElement('a-gltf-model');
        animationsEl.setAttribute('src', url);
        animationsEl.setAttribute('visible', false);
        animationsEl.setAttribute('data-meta-mesh-animation-mixer', '');

        animationsEl.addEventListener('model-loaded', ({ srcElement }) => {
          (animationsEl as Entity).setAttribute(
            'data-meta-mesh-animation-mixer-ready',
            ''
          );
          resolve(srcElement as Entity);
        });

        this.el.sceneEl?.append(animationsEl);
      } else if (
        !animationsEl.hasAttribute('data-meta-mesh-animation-mixer-ready')
      ) {
        animationsEl.addEventListener('model-loaded', ({ srcElement }) => {
          resolve(srcElement as Entity);
        });
      } else {
        resolve(animationsEl);
      }
    });
  }

  override async updateMesh(
    parentMesh: THREE.Object3D<THREE.Event>
  ): Promise<void> {
    const mesh = !this.object
      ? parentMesh
      : (parentMesh?.getObjectByName(this.object) as THREE.Object3D<Event>);

    if (!mesh) return;
    this.el.setObject3D('mesh', mesh);

    if (this.shared) {
      this.updateShare();
    }

    await this.initialization(this.url);
    this.el.setAttribute('animation-mixer', this.mixer);
  }
}

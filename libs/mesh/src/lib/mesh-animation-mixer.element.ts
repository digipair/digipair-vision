import {
  customElement,
  Entity,
  MetaElement,
  property,
} from '@pinser-metaverse/core';

@customElement('meta-mesh-animation-mixer')
export class AnimationMixerElement extends MetaElement {
  @property()
  object!: string;

  @property()
  url!: string;

  @property()
  mixer!: string;

  @property({ default: 'AuxScene' })
  origin!: string;

  private meshChanged = (event: any) => {
    if (!event.target.contains(this.el) || event.target === this.el) {
      return;
    }

    this.updateMesh(event.detail.object);
  };

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

  private async updateMesh(
    parentMesh: THREE.Object3D<THREE.Event>
  ): Promise<void> {
    const mesh = parentMesh?.getObjectByName(
      this.object
    ) as THREE.Object3D<Event>;

    if (!mesh) return;
    this.el.setObject3D('mesh', mesh);

    await this.initialization(this.url);
    this.el.setAttribute('animation-mixer', this.mixer);
  }
}

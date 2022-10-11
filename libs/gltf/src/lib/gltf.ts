import {
  customElement,
  Entity,
  html,
  internalProperty,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import './gltf-static';

@customElement('meta-gltf')
export class GltfElement extends MetaElement {
  @property()
  url!: string;

  @property()
  animations!: string;

  @property()
  playing!: string;

  @property({ default: false })
  development!: boolean;

  @property({ default: {} })
  materials!: any;

  @property({ default: {} })
  meshes!: any;

  @internalProperty()
  animationinitialized = false;

  private async initialization(
    srcElement: Entity,
    animationsModel: string
  ): Promise<void> {
    if (!animationsModel) {
      return;
    }

    await this.addAnimations(srcElement, animationsModel);
    this.animationinitialized = true;
  }

  async addAnimations(modelEl: Entity, animationsModel: string) {
    const animationsEl = await this.getAnimationsElement(animationsModel);

    (modelEl.object3D.getObjectByName('Scene') as THREE.Object3D).animations =
      animationsEl.object3D.getObjectByName('AuxScene')?.animations || [];
  }

  private getAnimationsElement(animationsModel: string): Promise<Entity> {
    return new Promise((resolve) => {
      let animationsEl: Entity | null | undefined =
        this.el.sceneEl?.querySelector(
          `:scope > [data-meta-gltf][url="${animationsModel}"]`
        );

      if (!animationsEl) {
        animationsEl = document.createElement('meta-gltf-static');
        animationsEl.setAttribute('url', animationsModel);
        animationsEl.setAttribute('visible', false);
        animationsEl.setAttribute('data-meta-gltf-animations', '');

        animationsEl.addEventListener('model-loaded', ({ srcElement }) => {
          (animationsEl as Entity).setAttribute(
            'data-meta-gltf-animations-ready',
            ''
          );
          resolve(srcElement as Entity);
        });

        this.el.sceneEl?.append(animationsEl);
      } else if (
        !animationsEl.hasAttribute('data-meta-gltf-animations-ready')
      ) {
        animationsEl.addEventListener('model-loaded', ({ srcElement }) => {
          resolve(srcElement as Entity);
        });
      } else {
        resolve(animationsEl.querySelector(':scope > a-gltf-model') as Entity);
      }
    });
  }

  override render(): TemplateResult {
    return html`
      <meta-gltf-static
        @model-loaded=${({ srcElement }: any) =>
          this.initialization(srcElement, this.animations)}
        url=${this.url}
        development=${this.development}
        materials=${JSON.stringify(this.materials)}
        meshes=${JSON.stringify(this.meshes)}
        animation-mixer=${!this.animationinitialized ? '' : this.playing}
      ></meta-gltf-static>
    `;
  }
}

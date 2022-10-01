import {
  customElement,
  Entity,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('meta-gltf-static')
export class GltfStaticElement extends MetaElement {
  private mesh: THREE.Mesh | null = null;

  @property({ default: false })
  development!: boolean;

  @property()
  url!: string;

  @property({ default: {} })
  materials!: any;

  @property({ default: {} })
  meshes!: any;

  private modelInitialise(el: Entity) {
    this.mesh = el.getObject3D('mesh') as THREE.Mesh;
    if (!this.mesh) {
      return;
    }

    if (this.development) {
      console.log('Debug: GltfCustomizerElement mesh', this.mesh);
    }

    this.setMaterials();
    this.setMeshes();
  }

  private setMaterial(name: string, value: any) {
    const { material } = (this.mesh as THREE.Mesh).getObjectByName(name) as any;

    for (const attribute of Object.keys(value)) {
      const attributeValue = value[attribute];

      if (material[attribute].set) {
        material[attribute].set(attributeValue);
      } else {
        material[attribute] = attributeValue;
      }
    }
  }

  private setMaterials(): void {
    for (const material of Object.keys(this.materials)) {
      this.setMaterial(material, this.materials[material]);
    }
  }

  private setMesh(name: string, value: any) {
    const mesh = (this.mesh as THREE.Mesh).getObjectByName(name) as any;

    for (const attribute of Object.keys(value)) {
      const attributeValue = value[attribute];

      if (mesh[attribute].set) {
        mesh[attribute].set(attributeValue);
      } else {
        mesh[attribute] = attributeValue;
      }
    }
  }

  private setMeshes(): void {
    for (const mesh of Object.keys(this.meshes)) {
      this.setMesh(mesh, this.meshes[mesh]);
    }
  }

  public override update(): void {
    if (this.mesh) {
      this.setMaterials();
      this.setMeshes();
    }
  }

  public override render(): TemplateResult {
    return html`
      <a-gltf-model
        src=${this.url}
        @model-loaded=${(event: THREE.Event) =>
          this.modelInitialise(event['srcElement'])}
      ></a-gltf-model>
    `;
  }
}

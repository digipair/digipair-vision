import { customElement, property } from '@pinser-metaverse/core';
import { MeshCommon } from './mesh.common';

@customElement('meta-mesh')
export class MeshElement extends MeshCommon {
  @property()
  object!: string;

  @property({ default: false })
  shared!: boolean;
}

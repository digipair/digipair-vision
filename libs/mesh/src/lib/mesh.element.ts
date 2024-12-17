import { customElement, property } from '@digipair-xr/core';
import { MeshCommon } from './mesh.common';

@customElement('meta-mesh')
export class MeshElement extends MeshCommon {
  @property()
  object!: string;

  @property({ default: false })
  shared!: boolean;
}

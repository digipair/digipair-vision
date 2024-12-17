import { customElement, MetaElement, property } from '@digipair-xr/core';
import SplineLoader from '@splinetool/loader';

@customElement('meta-spline')
export class SplineElement extends MetaElement {
  @property()
  scene!: string;

  override update(): void {
    const loader = new SplineLoader();

    loader.load(this.scene, (splineScene) => {
      this.el.setObject3D('mesh', splineScene);
    });
  }
}

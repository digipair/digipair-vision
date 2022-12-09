import { customElement, MetaElement, property } from '@pinser-metaverse/core';
import SplineLoader from '@splinetool/loader';

@customElement('meta-spline')
export class SplineElement extends MetaElement {
  @property()
  url!: string;

  override render(): null {
    const loader = new SplineLoader();

    loader.load(this.url, (splineScene) => {
      this.el.setObject3D('mesh', splineScene);
    });

    return null;
  }
}

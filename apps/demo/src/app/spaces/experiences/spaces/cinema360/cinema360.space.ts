import { html, MetaElement } from '@pinser-metaverse/core';
import { routeElement } from '@pinser-metaverse/router';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/html';

@routeElement('experiences-cinema360-space')
export class Cinema360SpaceElement extends MetaElement {
  override init() {
    let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    if (!assets) {
      assets = document.createElement('a-assets');
      this.el.sceneEl?.appendChild(assets);
    }

    let video = assets.querySelector('#video360') as any;
    if (!video) {
      video = document.createElement('video');
      video.setAttribute('id', 'video360');
      video.setAttribute('loop', 'true');

      const source = document.createElement('source');
      source.setAttribute('src', 'https://agency-experiences.onrender.com/assets/spaces/experiences/vr360.mp4');

      video.appendChild(source);
      assets.appendChild(video);
    }

    video.play();
  }

  override remove() {
    const assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    const video = assets.querySelector('#video360') as any;
    video.pause();
  }

  override render() {
    return html` <a-videosphere src="#video360"></a-videosphere> `;
  }
}

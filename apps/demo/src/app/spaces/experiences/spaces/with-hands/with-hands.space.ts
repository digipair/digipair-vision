import {
  html,
  inject,
  MetaElement,
  nothing,
  state,
} from '@pinser-metaverse/core';
import { routeElement } from '@pinser-metaverse/router';
import '@pinser-metaverse/design-system';
import './stand.element';
import { SessionProvider } from '../../../../session.provider';

@routeElement('experiences-with-hands-space', { networked: true })
export class WithHandsSpaceElement extends MetaElement {
  @state()
  current = -1;

  @inject()
  sessionProvider: SessionProvider;

  private articles = [
    {
      image:
        'https://agency-experiences.onrender.com/assets/spaces/experiences/nike.png',
      title: 'Nike',
      pins: {
        name: 'Nike',
        image:
          'https://agency-experiences.onrender.com/assets/spaces/experiences/nike.png',
        component: 'a-gltf-model',
        dynamic: false,
        editable: true,
        placeholder: {
          geometry: 'primitive: box; height: 0.106; width: 0.098; depth: 0.326',
          position: '0 0.081 0',
        },
        shape:
          'shape: box; halfExtents: 0.049 0.053 0.163; offset: 0.05 0.053 -0.06;',
        attributes: {
          position: '0 0 0',
          src: 'https://agency-experiences.onrender.com/assets/spaces/experiences/nike_shoe-small.glb',
          scale: '0.0015 0.0015 0.0015',
          rotation: '0 -90 0',
        },
      },
    },
    {
      image:
        'https://agency-experiences.onrender.com/assets/spaces/experiences/sci-fi.png',
      title: 'Sci-Fi',
      pins: {
        name: 'Sci-Fi',
        image:
          'https://agency-experiences.onrender.com/assets/spaces/experiences/sci-fi.png',
        component: 'a-gltf-model',
        dynamic: false,
        editable: true,
        placeholder: {
          geometry: 'primitive: box; height: 0.163; width: 0.098; depth: 0.326',
          position: '0 0.081 0',
        },
        shape: 'shape: box; halfExtents: 0.049 0.081 0.163; offset: 0 0.081 0;',
        attributes: {
          position: '0.015 0 -0.024',
          src: 'https://agency-experiences.onrender.com/assets/spaces/experiences/sci-fi_shoe-small.glb',
          scale: '2.445 2.445 2.445',
        },
      },
    },
  ];

  override init(): void {
    this.sessionProvider.startSession('f28115e2-bbd4-4da2-a6e9-c40f0391c620');
  }

  override remove(): void {
    this.sessionProvider.stopSession();
  }

  private show(pins: number) {
    this.current = pins;
  }

  override render() {
    return html`
      <a-sky
        hide-on-ar
        material="shader: gradient; topColor: 255 255 255; bottomColor: 0 10 255;"
      ></a-sky>

      <meta-dialog
        position="0.346 1.346 -1"
        rotation="0 -45 0"
        icon="storefront"
        width="1"
        height="0.5"
      >
        <a-text
          value="Search results: shoes"
          position="0.075 0.366 0.001"
          color="#000000"
          width="0.7"
        ></a-text>

        <a-entity position="0.067 -0.16 0.001">
          ${this.articles.map(
            (article, index) => html`
              <meta-menu-button-image
                position=${`${0.11 + (index % 3) * 0.18} ${
                  0.4 - Math.floor(index / 3) * 0.18
                } 0`}
                image=${article.image}
                title=${article.title}
                @click=${() => this.show(index)}
              ></meta-menu-button-image>
            `
          )}
        </a-entity>
      </meta-dialog>

      ${this.current < 0
        ? nothing
        : html`
            <experiences-with-hands-stand
              pins=${btoa(JSON.stringify(this.articles[this.current].pins))}
              position="1.09 1.36 -0.166"
              rotation="0 -90 0"
            ></experiences-with-hands-stand>
          `}
    `;
  }
}

import { html, inject, MetaElement } from '@pinser-metaverse/core';
import { routeElement, RouterProvider } from '@pinser-metaverse/router';
import { routes } from './experiences.routes';
import { PinserProvider } from '../../pinser.provider';

@routeElement('experiences-space', {
  providers: [RouterProvider],
})
export class ExperiencesSpaceElement extends MetaElement {
  @inject()
  routerProvider: RouterProvider;

  @inject()
  pinserProvider: PinserProvider;

  private experiences = [
    {
      title: 'Pop corn',
      image: 'https://agency-experiences.onrender.com/assets/spaces/experiences/cinema-food-small.png',
      route: '/experiences/cinema/',
    },
    {
      title: 'Black night',
      image: 'https://agency-experiences.onrender.com/assets/spaces/experiences/night-small.png',
      route: '/experiences/cinemavr/',
    },
    {
      title: '360',
      image: 'https://agency-experiences.onrender.com/assets/spaces/experiences/360-degree-small.png',
      route: '/experiences/cinema360/',
    },
    {
      title: 'Prison',
      image: 'https://agency-experiences.onrender.com/assets/spaces/experiences/prisoner-small.png',
      route: '/experiences/mixed-reality/',
    },
    {
      title: 'Shopping',
      image: 'https://agency-experiences.onrender.com/assets/spaces/experiences/shopping-cart-with-gift-box-small.png',
      route: '/experiences/with-hands/',
    },
  ];

  override init(): void {
    this.routerProvider.setBaseUrl(`experiences/`);
    this.routerProvider.setRoutes(routes);
  }

  private go(route: string) {
    if (route.indexOf('http') >= 0) {
      window.location = route as any;
    } else {
      this.pinserProvider.go(route);
    }
  }

  override render() {
    return html`
      <meta-logo
        position="-0.38 1.683 -1"
        rotation="22.5 -45 -22.5"
        scale="0.1 0.1 0.1"
      ></meta-logo>

      <meta-menu-button-image
        position="-0.39 1.52 -1"
        image="https://agency-experiences.onrender.com/assets/spaces/experiences/back-arrow-small.png"
        title="Home "
        actionicon="first_page"
        actiontext="Retour"
        @click=${() => this.go('/home/')}
      ></meta-menu-button-image>

      <a-entity position="-0.3 1.3 -1">
        ${this.experiences.map(
          (experience, index) => html`
            <meta-menu-button-image
              position=${`${0.11 + (index % 3) * 0.18} ${
                0.4 - Math.floor(index / 3) * 0.18
              } 0`}
              image=${experience.image}
              title=${experience.title}
              actionicon="movie_filter"
              actiontext="Voir"
              @click=${() => this.go(experience.route)}
            ></meta-menu-button-image>
          `
        )}
      </a-entity>

      <meta-router-outlet></meta-router-outlet>
    `;
  }
}

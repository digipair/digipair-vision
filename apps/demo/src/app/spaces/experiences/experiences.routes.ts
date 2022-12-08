import './spaces/home/home.space';
import './spaces/cinema/cinema.space';
import './spaces/cinema360/cinema360.space';
import './spaces/cinemavr/cinemavr.space';
import './spaces/mixed-reality/mixed-reality.space';
import './spaces/with-hands/with-hands.space';

export const routes = [
  {
    path: '/',
    component: 'experiences-home-space',
  },
  {
    path: '/cinema/(.*)',
    component: 'experiences-cinema-space',
  },
  {
    path: '/cinemavr/(.*)',
    component: 'experiences-cinemavr-space',
  },
  {
    path: '/cinema360/(.*)',
    component: 'experiences-cinema360-space',
  },
  {
    path: '/mixed-reality/(.*)',
    component: 'experiences-mixed-reality-space',
  },
  {
    path: '/mixed-reality/(.*)',
    component: 'experiences-mixed-reality-space',
  },
  {
    path: '/with-hands/(.*)',
    component: 'experiences-with-hands-space',
  },
  {
    path: '/without-controller/(.*)',
    component: 'experiences-without-controller-space',
  },
];

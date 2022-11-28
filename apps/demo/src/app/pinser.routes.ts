import './spaces/home/home.space';
import './spaces/experiences/experiences.space';

export const routes = [
  {
    path: '/',
    redirect: '/home/',
  },
  {
    path: '/home/(.*)',
    component: 'home-space',
  },
  {
    path: '/experiences/(.*)',
    component: 'experiences-space',
  },
];

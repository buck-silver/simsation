import { Routes } from '@angular/router';
import type { Nav } from '../../../core/navigation/nav';

export const WORLDS_NAV: Nav = {
  text: 'Worlds',
  path: 'worlds',
};

export const WORLDS_ROUTES: Routes = [
  {
    path: 'willow-creek',
    title: 'Willow Creek (Base Game)',
    loadComponent: () => import('./posts/willow-creek-world.page'),
  },
  {
    path: 'oasis-springs',
    title: 'Oasis Springs (Base Game)',
    loadComponent: () => import('./posts/oasis-springs-world.page'),
  },
  {
    path: 'new-crest',
    title: 'Newcrest (Base Game)',
    loadComponent: () => import('./posts/new-crest-world.page'),
  },
  {
    path: 'granite-falls',
    title: 'Granite Falls (Outdoor Retreat)',
    loadComponent: () => import('./posts/granite-falls-world.page'),
  },
  {
    path: 'magnolia-promenade',
    title: 'Magnolia Promenade (Get to Work)',
    loadComponent: () => import('./posts/magnolia-promenade-world.page'),
  },
  {
    path: 'windenburg',
    title: 'Windenburg (Get Together)',
    loadComponent: () => import('./posts/windenburg-world.page'),
  },
  {
    path: 'san-myshuno',
    title: 'San Myshuno (City Living)',
    loadComponent: () => import('./posts/san-myshuno-world.page'),
  },
  {
    path: 'forgotten-hollow',
    title: 'Forgotten Hollow (Vampires)',
    loadComponent: () => import('./posts/forgotten-hollow-world.page'),
  },
  {
    path: 'brindleton-bay',
    title: 'Brindleton Bay (Cats & Dogs)',
    loadComponent: () => import('./posts/brindleton-bay-world.page'),
  },
  {
    path: 'selvadorada',
    title: 'Selvadorada (Jungle Adventure)',
    loadComponent: () => import('./posts/selvadorada-world.page'),
  },
  {
    path: 'del-sol-valley',
    title: 'Del Sol Valley (Get Famous)',
    loadComponent: () => import('./posts/del-sol-valley-world.page'),
  },
  {
    path: 'strangerville',
    title: 'Strangerville (StrangerVille)',
    loadComponent: () => import('./posts/strangerville-world.page'),
  },
  {
    path: 'sulani',
    title: 'Sulani (Island Living)',
    loadComponent: () => import('./posts/sulani-world.page'),
  },
  {
    path: 'glimmerbrook',
    title: 'Glimmerbrook (Realm of Magic)',
    loadComponent: () => import('./posts/glimmerbrook-world.page'),
  },
  {
    path: 'britechester',
    title: 'Britechester (Discover University)',
    loadComponent: () => import('./posts/britechester-world.page'),
  },
  {
    path: 'evergreen-harbor',
    title: 'Evergreen Harbor (Eco Lifestyle)',
    loadComponent: () => import('./posts/evergreen-harbor-world.page'),
  },
  {
    path: 'mt-komorebi',
    title: 'Mt. Komorebi (Snowy Escape)',
    loadComponent: () => import('./posts/mt-komorebi-world.page'),
  },
  {
    path: 'henford-on-bagley',
    title: 'Henford-On-Bagley (Cottage Living)',
    loadComponent: () => import('./posts/henford-on-bagley-world.page'),
  },
  {
    path: 'tartosa',
    title: 'Tartosa (My Wedding Stories)',
    loadComponent: () => import('./posts/tartosa-world.page'),
  },
];

export const ROUTES: Routes = [
  {
    path: 'worlds',
    title: 'Worlds | Simsation',
    loadComponent: () => import('./worlds.page'),
    children: WORLDS_ROUTES,
  },
];

export default ROUTES;

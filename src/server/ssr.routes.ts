import { RenderMode, ServerRoute } from '@angular/ssr';

export const SSR_ROUTES: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

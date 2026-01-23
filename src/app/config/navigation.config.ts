import { loadNav, type Nav } from '../core/navigation/nav';
import { NAV as home } from '../pages/home/home.routes';
import { NAV as sims } from '../pages/sims/sims.routes';
import { NAV as contact } from '../pages/contact/contact.routes';

export const NAVIGATION_CONFIG: Nav = [
  ...loadNav(home),
  ...loadNav(sims),
  ...loadNav(contact),
];

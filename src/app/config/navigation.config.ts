import { NavMain } from '../core/navigation/nav-main';
import { APPS_NAV } from '../pages/apps/apps.routes';
import { CHALLENGES_NAV } from '../pages/challenges/challenges.routes';
import { CONTACT_NAV } from '../pages/contact/contact.routes';
import { HOME_NAV } from '../pages/home/home.routes';
import { SHELLS_NAV } from '../pages/shells/shells.routes';
import { WORLDS_NAV } from '../pages/worlds/worlds.routes';

export const NAVIGATION_CONFIG: NavMain = [
  HOME_NAV,
  APPS_NAV,
  CHALLENGES_NAV,
  SHELLS_NAV,
  WORLDS_NAV,
  CONTACT_NAV,
];

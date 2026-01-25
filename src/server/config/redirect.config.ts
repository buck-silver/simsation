import type { RedirectConfig } from '../middleware/redirect/with-redirect.middleware';
import { HttpRedirectStatus } from '../../lib/http/http-status.enum';

const REDIRECT_CONFIG: RedirectConfig = {
  // Pages
  // | /about-me                     | page | About Me
  // | /contact-me                   | page | Contact me!
  // | /donate                       | page | Donate
  // | /latest-streams-new-apps      | page | Latest Posts & New Apps
  // | /sims-4-challenges-generators | page | Sims 4 Challenges + Generators

  // Home page
  '/about-me': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  // Contact Page
  '/contact-me': {
    target: '/contact',
    status: HttpRedirectStatus.MovedPermanently,
  },
  // Donation Page
  '/donate': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  // This was the listings page for latest blog posts and new apps.
  '/latest-streams-new-apps': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  // This was the old main listings page for apps, challenges, shells, and mods.
  '/sims-4-challenges-generators': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },

  // Clips
  // | /clip-from-twitch-5               | post | Clip From Twitch #5
  // | /clip-from-twitch-january-12-2021 | post | Clip From Twitch #2
  // | /clip-from-twitch-january-13-2021 | post | Clip From Twitch #3
  // | /clip-from-twitch-january-15-2021 | post | Clip From Twitch #4
  // | /clip-from-twitch-january-7-2021  | post | Clip From Twitch #1
  '/clip-from-twitch-5': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/clip-from-twitch-january-12-2021': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/clip-from-twitch-january-13-2021': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/clip-from-twitch-january-15-2021': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/clip-from-twitch-january-7-2021': {
    target: '/',
    status: HttpRedirectStatus.MovedPermanently,
  },

  // Apps
  // | /every-room-is-a-different-colour | post | Every Room Is A Different Colour
  // | /every-room-is-a-different-pack   | post | Every Room Is A Different Pack
  // | /random-achievement-generator     | post | Random Achievement Generator
  // | /random-build-generator           | post | Random Build Generator
  // | /update-random-build-generator    | post | UPDATE Random Build Generator
  '/every-room-is-a-different-colour': {
    target: '/sims/apps/room-color-randomizer',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/every-room-is-a-different-pack': {
    target: '/sims/apps/room-pack-randomizer',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/random-achievement-generator': {
    target: '/sims/achievements',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/random-build-generator': {
    target: '/sims/apps/build-randomizer',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/update-random-build-generator': {
    target: '/sims/apps/build-randomizer',
    status: HttpRedirectStatus.MovedPermanently,
  },

  // Challenges
  // | /100-baby-challenge                 | post | 100 Baby Challenge
  // | /a-different-kind-of-jam-challenge  | post | A Different Kind of Jam Challenge
  // | /asylum-challenge                   | post | Asylum Challenge
  // | /black-widow-challenge              | post | Black Widow Challenge
  // | /bunker-legacy-challenge            | post | Bunker Legacy Challenge
  // | /career-legacy-challenge            | post | Career Legacy Challenge
  // | /cowplant-farm-challenge            | post | Cowplant Farm Challenge
  // | /cult-or-commune-challenge          | post | Cult or Commune Challenge
  // | /decades-challenge                  | post | Decades Challenge
  // | /isbi-challenge                     | post | ISBI Challenge
  // | /legacy-challenge-simple-variations | post | Legacy Challenge & Simple Variations
  // | /not-so-berry-challenge             | post | Not So Berry Challenge
  // | /not-so-berry-challenge-2           | post | Not So Berry Challenge #2
  // | /off-the-grid-challenge             | post | Off The Grid Challenge
  // | /rags-to-riches-mega-challenge      | post | Rags to Riches Mega Challenge
  // | /vampire-dynasty-challenge          | post | Vampire Dynasty Challenge
  '/100-baby-challenge':{
    target: '/sims/challenges/one-hundred-baby-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/a-different-kind-of-jam-challenge': {
    target: '/sims/challenges/a-different-kind-of-jam',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/asylum-challenge':{
    target: '/sims/challenges/asylum-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/black-widow-challenge':{
    target: '/sims/challenges/black-widow-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/bunker-legacy-challenge':{
    target: '/sims/challenges/bunker-legacy-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/career-legacy-challenge':{
    target: '/sims/challenges/career-legacy-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/cowplant-farm-challenge':{
    target: '/sims/challenges/cowplant-farm-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/cult-or-commune-challenge':{
    target: '/sims/challenges/cult-or-commune-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/decades-challenge':{
    target: '/sims/challenges/decades-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/isbi-challenge':{
    target: '/sims/challenges/isbi-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/legacy-challenge':{
    target: '/sims/challenges/legacy-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/not-so-berry-challenge':{
    target: '/sims/challenges/not-so-berry-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/not-so-berry-2-challenge':{
    target: '/sims/challenges/not-so-berry-2-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/off-the-grid-challenge':{
    target: '/sims/challenges/off-the-grid-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/rags-to-riches-mega-challenge':{
    target: '/sims/challenges/rags-to-riches-mega-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/vampire-dynasty-challenge':{
    target: '/sims/challenges/vampire-dynasty-challenge',
    status: HttpRedirectStatus.MovedPermanently,
  },

  // Shells
  // | /earthship-shell          | post | Earthship Shell
  // | /igloo-shell              | post | Igloo Shell
  // | /lighthouse-shell         | post | Lighthouse Shell
  // | /penthouse-shell          | post | Penthouse Shell
  // | /shipping-container-shell | post | Shipping Container Shell
  '/earthship-shell': {
    target: '/sims/shells',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/igloo-shell': {
    target: '/sims/shells',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/lighthouse-shell': {
    target: '/sims/shells',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/penthouse-shell': {
    target: '/sims/shells',
    status: HttpRedirectStatus.MovedPermanently,
  },
  '/shipping-container-shell': {
    target: '/sims/shells',
    status: HttpRedirectStatus.MovedPermanently,
  },
};

export default REDIRECT_CONFIG;

/**
 * home router
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::home.home');

export default {
  routes: [
    { method: "GET", path: "/home/hero", handler: "home.hero", },
    { method: "GET", path: "/home/about", handler: "home.about", },
    { method: "GET", path: "/home/cards", handler: "home.cards", },
    { method: "GET", path: "/home/events", handler: "home.events", },
    { method: "GET", path: "/home/testimonials", handler: "home.testimonials", },
    { method: "GET", path: "/home/forms", handler: "home.forms", },
    { method: "GET", path: "/home/blogs", handler: "home.blogs", },
  ],
};
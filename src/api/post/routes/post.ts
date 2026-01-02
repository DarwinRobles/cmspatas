/**
 * post router
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::post.post');

const UID = "api::post.post";

export default {
  routes: [
    {
      method: "GET",
      path: "/blog/feed",
      handler: "post.blogFeed",
    },
    {
      method: "GET",
      path: "/blog/:slug",
      handler: "post.blogBySlug",
    },
  ],
};
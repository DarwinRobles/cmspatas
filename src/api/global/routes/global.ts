/**
 * global router.
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreRouter('api::global.global');
export default {
  routes: [
    { method: "GET", path: "/global/metas", handler: "global.metas", },
    { method: "GET", path: "/global/redes", handler: "global.redes", },
    { method: "GET", path: "/global/analytics", handler: "global.analytics", },
  ],
};

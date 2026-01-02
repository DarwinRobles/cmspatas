/**
 * post controller
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreController('api::post.post');

const UID = "api::post.post";

export default factories.createCoreService(UID, ({ strapi }) => ({
  async blogFeed(ctx) {
    const page = Number(ctx.query.page) || 1;
    const pageSize = Number(ctx.query.pageSize) || 10;

    const data = await strapi.service(UID).findBlogFeed(page, pageSize);
    
    ctx.body = data;
  },
  async blogBySlug(ctx) {
    const data = await strapi.service(UID).findBlobBySlug(ctx.params.slug);
    ctx.body = data;
  },
}));
/**
 * post service
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreService('api::post.post');

const UID = "api::post.post";

export default factories.createCoreService(UID, ({ strapi }) => ({
  async findBlogFeed(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
     const [results, total] = await Promise.all([
      strapi.entityService.findMany(UID, {
        orderBy: { id: 'asc' },
        limit: pageSize,
        offset,
        select: ['documentId', 'title', 'description', 'slug', 'createdAt'],
        populate: {
          category: { fields: ['name'] },
          author: { fields: ['name'] },
        },
      }),
      strapi.entityService.count(UID),
    ]);
    return {
      results,
      pagination: {
        page,
        pageSize,
        pageCount: Math.ceil(total / pageSize),
        total,
      },
    };
  },

  async findBlobBySlug(slug: string) {
    if (!slug || typeof slug !== "string") {
      throw new Error("Slug inválido 404");
    }

    const records = await strapi.entityService.findMany(UID, {
      filters: { slug },
      select: ["documentId", "title", "description", "slug", "content"],
      populate: {
        image: {
          fields: ["url"],
        },
        category: {
          fields: ["name"],
        },
        author: {
          fields: ["name"],
        },
        seo: {},
      },
      limit: 1,
    });

    return records[0] || null;
  },
}));

/**
 *  global controller
 */

import { factories } from '@strapi/strapi';

//export default factories.createCoreController('api::global.global');
const UID = "api::global.global";

async function getTitlesSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId", "siteName", "siteDescription"],
    populate: {
        defaultSeo: { fields: ["metaTitle", "metaDescription"], select: ["metaTitle", "metaDescription"]},
    }
  });
}

async function getRedesSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId"],
        populate: {
            redes: { fields: ["url"], select: ["url"],
                populate: {
                    icon: { fields: ["url"], select: ["url"]},
                },
            },
            
        }
  });
}

async function getAnalyticsSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId", "analytics"]
  });
}

export default factories.createCoreController(UID, ({ strapi }) => ({
   
  async metas(ctx) {
    ctx.body = await getTitlesSection(strapi, "metas");
  },

  async redes(ctx) {
    ctx.body = await getRedesSection(strapi, "redes");
  },
  async analytics(ctx) {
    ctx.body = await getAnalyticsSection(strapi, "analytics");
  }

}));

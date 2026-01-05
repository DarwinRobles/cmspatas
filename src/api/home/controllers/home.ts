/**
 * home controller
 */

import { factories } from '@strapi/strapi';
//export default factories.createCoreController('api::home.home');

const UID = "api::home.home";

async function getHomeSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId", "description"],
    populate: {
        logo: { fields: ["url"], select: ["url"]},
        background: { fields: ["url"], select: ["url"]},
        action: { fields: ["name", "url"], select: ["name", "url"]},
    }
  });
}

async function getAboutSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId", "gallerymessage"],
        populate: {
            gallery: { fields: ["url"], select: ["url"]},
            gallerydescription: { fields: ["content"], select: ["content"]},
        }
  });
}

async function getCardsSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId", "message"],
        populate: {
            titlecards: { fields: ["content"], select: ["content"]},
            cards: {
                populate:{
                    icon: { fields: ["url"], select: ["url"]},
                },
                fields: ["title", "content", "showimage", "showButton"], select: ["title", "content", "showimage", "showButton"]},
        }
  });
}

async function getEventsSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId"],
        populate: {
            eventstitle: { fields: ["content"], select: ["content"]},
            eventscard: { fields: ["title", "content", "showimage", "showButton"], select: ["title", "content", "showimage", "showButton"],
                populate: {
                icon: { fields: ["url"], select: ["url"]},
                image: { fields: ["url"], select: ["url"]},
                cta: { fields: ["name", "url"], select: ["name", "url"]},
            },
          },
        }
  });
}

async function getTerminialSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId"],
        populate: {
          titlecoments: { fields: ["content"], select: ["content"]},
          coments: { fields: ["name", "pisition", "photo", "coment"], select: ["name", "pisition", "photo", "coment"],
            populate:{
                image: { fields: ["url"], select: ["url"]},
            },
          },
        }
  });
}

async function getFormsSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId"],
        populate: {
          formtitle: { fields: ["content"], select: ["content"]},
          personform: { fields: ["type", "text","name"], select: ["type", "text", "name"]},
          businessform: { fields: ["type", "text", "name"], select: ["type", "text", "name"]},
        }
  });
}

async function getBlogsSection(strapi: any, ctx: any) {
  return await strapi.db.query(UID).findOne({
    select: ["documentId"],
        populate: {
          blog: { fields: ["content"], select: ["content"]},
        }
  });
}




export default factories.createCoreController(UID, ({ strapi }) => ({
   
  async hero(ctx) {
    ctx.body = await getHomeSection(strapi, "hero");
  },

  async about(ctx) {
    ctx.body = await getAboutSection(strapi, "about");
  },

  async cards(ctx) {
    ctx.body = await getCardsSection(strapi, "cards");
  },

  async events(ctx) {
    ctx.body = await getEventsSection(strapi, "events");
  },

  async testimonials(ctx) {
    ctx.body = await getTerminialSection(strapi, "testimonials");
  },

  async forms(ctx) {
    ctx.body = await getFormsSection(strapi, "forms");
  },

  async blogs(ctx) {
    ctx.body = await getBlogsSection(strapi, "blogs");
  },

}));
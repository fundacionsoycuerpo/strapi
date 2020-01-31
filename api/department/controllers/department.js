"use strict";
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOneBySlug(ctx) {
    console.log(ctx.params);
    const entity = await strapi.services.department.findOne({
      slug: ctx.params.slug || ctx.params._slug
    });
    return sanitizeEntity(entity, { model: strapi.models.department });
  }
};

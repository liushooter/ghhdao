"use strict"

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async update(ctx) {
    console.log("🚀 ~ file: event.js:11 ~ update ~ ctx:", ctx)
    // if (ctx.state.user) {
    //   ctx.params.user = ctx.state.user.id
    // } else {
    //   ctx.params.uuid = ctx.query.uuid
    // }
    // const entity = await super.update(ctx)
    // return this.transformResponse(entity)
  },
}))

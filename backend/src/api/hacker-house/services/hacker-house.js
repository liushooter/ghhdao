'use strict';

/**
 * hacker-house service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hacker-house.hacker-house');

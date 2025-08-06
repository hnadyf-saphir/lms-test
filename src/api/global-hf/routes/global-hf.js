'use strict';

/**
 * global-hf router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-hf.global-hf');

'use strict';

/**
 * global-hf service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-hf.global-hf');

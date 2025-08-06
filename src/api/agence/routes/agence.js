'use strict';

/**
 * agence router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/agences-externe',
      handler: 'agence.findExternal',
      config: {
        policies: [],
        auth: false, // ou true si besoin de sécuriser
      },
    },
  ],
};


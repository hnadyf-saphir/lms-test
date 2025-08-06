'use strict';

/**
 * agence controller
 */
const axios = require('axios');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::agence.agence', ({
    async findExternal(ctx) {
        try {
            const https = require('https');

            const agent = new https.Agent({
                rejectUnauthorized: false, //  Ignore les erreurs SSL (attention en prod)
            });

            const response = await axios.get('https://api.les-menus-services.com/api/getAgencyForLmsById/145', {
                httpsAgent: agent,
            });


            // Tu peux filtrer ou transformer ici si besoin
            const agences = response.data.map(agence => ({
                id: agence.id,
                nom: agence.name,
                slug: agence.slug,
                adresse: agence.adresse,
                email: agence.email,
                phone: agence.phone,
                city: agence.city,
            }));

            return agences;
        } catch (error) {
            console.error('Erreur API externe:', error);
            ctx.throw(500, 'Erreur récupération agences externes');
        }
    }
}));

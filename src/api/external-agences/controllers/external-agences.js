process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

'use strict';

module.exports = {
  async find(ctx) {
    try {
      const url = 'https://api.les-menus-services.com/api/getAgencyForLmsById/202';

      const response = await fetch(url);
      if (!response.ok) {
        return ctx.badRequest(`Erreur API externe : ${response.status}`);
      }

      const data = await response.json();

      // On traite un seul objet 
      const agence = data;

      // Vérifie si l'agence existe déjà dans la base (via email)
      const existing = await strapi.entityService.findMany('api::agence.agence', {
        filters: { email: agence.email },
      });

      if (existing.length === 0) {
        await strapi.entityService.create('api::agence.agence', {
          data: {
            nom: agence.name,
            email: agence.email,
            phone: agence.phone,
            adresse: agence.adresse,
            slug: agence.slug,
          },
        });
      }

      ctx.send({ message: 'Les agences ont été synchronisées avec succès !' });
    } catch (error) {
      console.error('Erreur lors de la récupération de l’agence:', error);
      ctx.internalServerError('Erreur interne lors de la récupération de l’agence');
    }
  },
};

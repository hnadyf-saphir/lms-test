process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

'use strict';

module.exports = {
  async find(ctx) {
    try {
      const url = 'https://api.les-menus-services.com/api/getAgencyForLmsById/200';

      const response = await fetch(url);

      if (!response.ok) {
        return ctx.badRequest(`Erreur API externe : ${response.status}`);
      }

      const data = await response.json();
      //ctx.send({ data });
      // Parcourir les données pour les insérer dans Strapi
    
      for (const agence of [data]) { // Si ton API retourne un seul objet, on le met dans un tableau
        const existing = await strapi.db.query("api::agence.agence").findOne({
          where: { email: agence.email },
        });
        
        if (!existing) {
          await strapi.db.query("api::agence.agence").create({
            data: {
              nom: agence.name,
              email: agence.email,
              phone:  agence.phone,
              adresse: agence.adresse,
              slug: agence.slug,
            },
          });
        }
      }

      ctx.send({ message: 'Les agences ont été synchronisées avec succès !' });
    } catch (error) {
      console.error('Erreur lors de la récupération de l’agence:', error);
      ctx.internalServerError('Erreur interne lors de la récupération de l’agence');
    }
  },
};

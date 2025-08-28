module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/external-agences',
      handler: 'external-agences.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};


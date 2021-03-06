'use strict';

const controller     = require('./controller');
const authMiddleware = require('../../middlewares/auth');

module.exports = function (app) {

  // API ENDPOINTS
  app.delete('/api/card/:id', authMiddleware, controller.delete);
  app.post('/api/card', authMiddleware, controller.save);
  app.put('/api/card/:id', authMiddleware, controller.update);
  app.get('/api/card', authMiddleware, controller.get);


  // PUBLIC ENDPOINTS
  app.get('/api/cards/getUrls', controller.getUrls);
  app.get('/:group/:method/:id/*', controller.render);
  app.get('/:group/:method/*', controller.render);

  app.get('/card/:cardId', controller.getCardById);

  app.get('/test', (req, res) => {
    res.send({ result : true });
  });

};
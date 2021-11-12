const express = require('express');
const controllers = require('../controllers');

const apiRoutes = express.Router();
apiRoutes.use(express.json());
apiRoutes.use(express.urlencoded({ extended: true }));

apiRoutes.get('/', controllers.getNews);
apiRoutes.get('/create_news', controllers.getCreateNews);
apiRoutes.post('/create_news', controllers.postCreateNews);

module.exports = apiRoutes;

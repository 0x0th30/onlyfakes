const express = require('express');
const controllers = require('../controllers');

const routes = express.Router();
routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.get('/', controllers.getNews);
routes.get('/news', controllers.readNews);
routes.get('/create_news', controllers.getCreateNews);
routes.post('/create_news', controllers.postCreateNews);

module.exports = routes;

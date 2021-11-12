const express = require('express');
const controllers = require('../controllers');

const routes = express.Router();
routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.get('/', controllers.getNews);
routes.post('/', controllers.filterNews);

routes.get('/news', controllers.readNews);

routes.get('/create_news', controllers.getCreateNews);
routes.post('/create_news', controllers.postCreateNews);

routes.get('/delete_news', controllers.getDeleteNews);

routes.get('/update_news', controllers.getUpdateNews);
routes.post('/update_news', controllers.postUpdateNews);

module.exports = routes;

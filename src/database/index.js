const Sequelize = require('sequelize');
const News = require('../models/News');
const db_config = require('../../config/db_config.json');

const connection = new Sequelize(db_config);
News.init(connection);

module.exports = connection;
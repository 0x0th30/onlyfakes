const express = require('express');
const path = require('path');
const routes = require('./routes');
const server_config = require('../config/server_config.json');

require('./database');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', routes);

app.listen(server_config.port, () => {
    console.log(`listening at http://${server_config.host}:${server_config.port}`);
});
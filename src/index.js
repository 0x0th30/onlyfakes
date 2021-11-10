const express = require('express');
const routes = require('./routes');
const server_config = require('../config/server_config.json');

const app = express();
app.use('/', routes)

app.listen(server_config.port, () => {
    console.log(`listening at http://${server_config.host}:${server_config.port}`);
})
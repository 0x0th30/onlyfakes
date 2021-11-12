const News = require('../models/News');

module.exports = {
    async getNews (req, res) {
        //const news = await News.findAll()
        //res.json(news);
        res.render('./index.ejs');
    },
    async getCreateNews (req, res) {
        res.render('./cadastrar.ejs');
    },
    async postCreateNews (req, res) {
        let news = req.body;
        news = await News.create(news);
        return res.redirect('/');
    },
}
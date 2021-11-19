const News = require('../models/News');
const { Op } = require('sequelize');

module.exports = {
    async getNews (req, res) {
        const news = await News.findAll()

        res.render('./index.ejs', { pageTitle: 'Home - OnlyFakes', news: news });
    },

    async filterNews (req, res) {
        const search = req.body.search;
        const news = await News.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${search}%` } },
                    { body: { [Op.like]: `%${search}%` }},
                    { author: { [Op.like]: `%${search}%` }},
                    
                ]
            }
        })
        res.render('./index.ejs', { pageTitle: 'Home - OnlyFakes', news: news } );
    },

    async readNews (req, res) {
        const id = req.query.id;
        const news = await News.findOne({
            where: {
                id: id
            }
        })

        res.render('./noticia.ejs', { pageTitle: `${news.title} - OnlyFakes`, news: news });
    },

    async getCreateNews (req, res) {
        res.render('./cadastrar.ejs', { pageTitle: 'Criação - OnlyFakes' });
    },

    async postCreateNews (req, res) {
        let news = req.body;
        news = await News.create(news);

        return res.redirect('/');
    },

    async getDeleteNews (req, res) {
        const id = req.query.id;
        const news = await News.destroy({
            where: {
                id: id
            }
        });

        return res.redirect('/');        
    },

    async getUpdateNews (req, res) {
        const id = req.query.id;
        let news = await News.findOne({
            where: {
                id: id
            }
        });

        return res.render('./atualizar.ejs', { pageTitle: `${news.title} - News CRUD`, news: news }); 
    },

    async postUpdateNews (req, res) {
        const id = req.query.id
        let news = req.body;
        news = await News.update(
            news, 
            {
                where: {
                    id: id
                }
            }
        );

        return res.redirect('/');
    }
}
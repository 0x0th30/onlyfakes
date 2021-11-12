const { Model, DataTypes } = require('sequelize');           

class News extends Model {                                   
    static init (sequelize) {                                
        super.init({                                         
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
            author: DataTypes.STRING   
        }, { 
            sequelize                                        
        })
    }
}

module.exports = News;                                       
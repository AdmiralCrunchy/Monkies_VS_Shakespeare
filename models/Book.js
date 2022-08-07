const { Model, DataTypes} = require('sequelize');
const sequelize = require('..config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,    
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validator: {
                isUnique: true,
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        section_Id: {
            type: DataTypes.INTEGER,    
            allowNull: false,
        }
    },
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;
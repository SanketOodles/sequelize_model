'use strict';

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models){
            Products.hasMany(models.productBrands,{
                foreignKey:'product_id',
                as:'productbrands',
            })
        }

    }
    Products.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name:DataTypes.STRING,
        description:DataTypes.STRING,
        color_name:DataTypes.STRING,
        type:DataTypes.STRING,
        price:DataTypes.INTEGER,
        status:DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        created_by_id: DataTypes.INTEGER,
        updated_by_id: DataTypes.INTEGER,
        deleted_by_id: DataTypes.INTEGER,

    },
        {
            sequelize,
            modelName: 'Products',
            tableName: 'products',
            timestamps: true,
            underscored: true,
            paranoid: true,
        }
    );
    return Products;
};
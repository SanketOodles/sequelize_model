'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class productBrands extends Model {
        static associate(models) {
            productBrands.belongsTo(models.Brands, { 
                foreignKey: 'brand_id', 
                as: 'brands' 
            });
            productBrands.belongsTo(models.Products, { 
                foreignKey: 'product_id', 
                as: 'products' 
            });
        }


    }

    productBrands.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        product_id: DataTypes.INTEGER,
        brand_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        created_by_id: DataTypes.INTEGER,
        updated_by_id: DataTypes.INTEGER,
        deleted_by_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'productBrands',
        tableName: 'productbrands',
        timestamps: true,
        underscored: true,
        paranoid: true,
    }
    );
    return productBrands;
}
'use strict'

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Brands extends Model {
        static associate(models){
            //one Brand has to many productBrands
            Brands.hasMany(models.productBrands,{
                foreignKey:'brand_id',
                as:'product_brands',
            });

            Brands.belongsTo(models.Organisations,{
                foreignKey:'org_id',
                as:'organisations',
            })
           
        }

    }

    Brands.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: DataTypes.STRING,
        org_id: DataTypes.INTEGER,
        status: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        created_by_id: DataTypes.INTEGER,
        updated_by_id: DataTypes.INTEGER,
        deleted_by_id: DataTypes.INTEGER,

    },
        {
            sequelize,
            modelName: 'Brands',
            tableName: 'brands',
            timestamps: true,
            underscored: true,
            paranoid: true,
        }
    );
    return Brands;
}
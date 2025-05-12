'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Suppliers extends Model {
        static associate(models) {
            Suppliers.belongsTo(models.Organisations, {
                foreignKey: 'org_id',
                as: 'organisations',
            })
        }
    }
    Suppliers.init({
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
            modelName: 'Suppliers',
            tableName: 'suppliers',
            timestamps: true,
            underscored: true,
            paranoid: true,
        }
    );
    return Suppliers;
}

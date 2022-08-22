'use strict';
const {
  Model,Sequelize
} = require('sequelize');
const sequelize = new Sequelize("mvc", 'root', "", {
  host: 'localhost',
  dialect: "mysql"
});
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    P_name: DataTypes.STRING,
    P_brand: DataTypes.STRING,
    price: DataTypes.INTEGER,
    P_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });

(async () => {
  await sequelize.sync({ alter: true });
})
  ();

  Products.create({
    P_name: 'note10',
    P_brand: "samsung",
    price: 150,
    P_type: 'mobile'
  }, { fields: ['P_name', 'P_brand', 'price', ' P_type'] });

  console.log(Products.P_name); // 'alice345'
  console.log(Products === sequelize.models.Products);

  return Products.create();
};

const express = require('express');

const PORT = process.env.PORT || 4111;

const dotenv = require("dotenv");

dotenv.config();

const route = require('./routes/tea');

const app = express();

const session = require('express-session');

app.use(session({
  secret: 'oneboy',
  saveUninitialized: true,
  resave: true
}));

app.use(express.json());

app.use('/', route);

app.use('/', require('./routes/login'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

const passport = require('passport');

const { loginCheck } = require("./auth/passport")

loginCheck(passport);

app.use(passport.initialize());

app.use(passport.session());

const { Sequelize, DataTypes,Op, Model } = require('sequelize');
// const { STRING } = require('sequelize');
// const { DATE } = require('sequelize');

const sequelize = new Sequelize("mvc", 'root', "", {
  host: 'localhost',
  dialect: "mysql"
});
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
const product =await Products.create({
  P_name: 'note10',
  P_brand: "samsung",
  price: 150,
  P_type: 'mobile'
}, { fields: ['P_name', 'P_brand', 'price', ' P_type'] });

console.log(product instanceof Products);
console.log(product.P_name); 
console.log(Products === sequelize.models.Products);
})
();

class User extends Model {
  otherPublicField;
}

User.init({
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  location: {
    type: DataTypes.STRING,
    defaultValue: "New York",
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}
  , {
    sequelize });
(async () => {
  await sequelize.sync();

const user = User.create({

  name: 'alice3456',
  email: "robert1@gmail.com",
  password: 'robert12345',
  location: 'Gujranwala1'



}, { fields: ['name', 'email', 'password', 'location', 'date'] });

console.log(user.name); // 'alice345'

})
();

console.log("i am working");
app.listen(PORT, console.log("Server don start for port: " + PORT));

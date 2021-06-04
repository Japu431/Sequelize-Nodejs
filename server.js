const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

const sequelize = new Sequelize("teste", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});


app.listen(8081, () => {
  console.log("Server rodando... => http://localhost:3000");
});

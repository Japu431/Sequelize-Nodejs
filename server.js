const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  Post.all({ order: [["id", "DESC"]] }).then((posts) => {
    res.render("home", { posts: posts });
  });
});

app.get("/cadastro", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(`Houve um erro!! => ${err}`);
    });
});

app.listen(8081, () => {
  console.log("Server rodando... => http://localhost:8081");
});

const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

Postagem.create({
  titulo: "Qualquer coisa",
  conteudo: "Qualquer coisa no conteúdo"
})


const Usuario = sequelize.define("usuarios", {
  nome: { type: Sequelize.STRING },
  sobrenome: { type: Sequelize.STRING },
  idade: { type: Sequelize.INTEGER },
  email: { type: Sequelize.STRING },
});

Usuario.create({
  nome: "Matheus",
  sobrenome: "Yusuke",
  idade: 16,
  email: "matheus@gmail.com"
})

// Usuario.sync({ force: true });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!!");
  })
  .catch((err) => {
    console.log(`Não possivel se conectar ${err}`);
  });

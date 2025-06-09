// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const db = require("./config/database");
const app = express();

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //
app.use(express.static("public"));

db.connect().then(() => {
  console.log("Conectado ao banco de dados");
  const PORT = process.env.PORT || 3000;

  app.use("/healthcheck",(req, res, next) => {
    res.status(200).send("Success");
  });
  const userRoutes = require("./routes/users");
  app.use("/users", userRoutes);

  const projetosRoutes = require("./routes/projetos");
  app.use("/projects", projetosRoutes);

  const tarefasRoutes = require("./routes/tarefas");
  app.use("/tasks", tarefasRoutes);

  const frontendRoutes = require('./routes/frontRoutes');
    app.use('/', frontendRoutes);
  
  app.use((req, res, next) => {
    res.status(404).send("Página não encontrada");
  });

  
  // Middleware para lidar com erros internos do servidor
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Erro no servidor");
  });

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});

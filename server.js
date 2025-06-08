// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//const homeRoutes = require('./controllers/homeController');
const routes = require('./routes');

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas principais
app.use('/api', routes);
app.use('/projetos', routes)

// Rota para view de cadastro (primeira visualização)
app.get('/', (req, res) => {
  res.render('cadastro/cadastroUsuario');
});

app.post('/adicionarProjeto', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

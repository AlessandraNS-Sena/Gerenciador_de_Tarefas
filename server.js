// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
//const homeRoutes = require('./controllers/homeController');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(express.static('public'));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas principais
app.use('/api', routes);
app.use('/projetos', routes)

// Rota para view de cadastro (primeira visualização)
app.get('/', (req, res) => {
  res.render('cadastro/cadastroUsuario');
});

app.post('/api/projetos/criar', async (req, res) => {
  console.log('Dados recebidos:', req.body); // Verificar o conteúdo do JSON

  try {
    const { nome_projeto, descricao_projeto } = req.body;

    if (!nome_projeto || !descricao_projeto) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const novoProjeto = new Projeto({ nome_projeto, descricao_projeto });
    await novoProjeto.save();

    res.status(201).json(novoProjeto);
  } catch (error) {
    console.error('Erro ao criar projeto:', error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

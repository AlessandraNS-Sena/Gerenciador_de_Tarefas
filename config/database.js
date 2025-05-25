// Importa a classe Pool do módulo 'pg' (PostgreSQL) para gerenciar conexões com o banco de dados
const { Pool } = require('pg');

// Carrega variáveis de ambiente do arquivo .env para process.env
require('dotenv').config();

// Verifica se a variável de ambiente DB_SSL está definida como 'true' (string)
const isSSL = process.env.DB_SSL === 'true';

// Cria um novo pool de conexões com o banco de dados PostgreSQL, usando as variáveis do .env
const pool = new Pool({
  user: process.env.DB_USER,             // Usuário do banco
  host: process.env.DB_HOST,             // Host do banco (ex: localhost ou URL remota)
  database: process.env.DB_DATABASE,     // Nome do banco de dados
  password: process.env.DB_PASSWORD,     // Senha do usuário
  port: process.env.DB_PORT,             // Porta de conexão (geralmente 5432)
  
  // Se SSL estiver ativado, usa SSL sem verificação de certificado. Caso contrário, desativa SSL.
  ssl: isSSL ? { rejectUnauthorized: false } : false,
});

// Exporta dois métodos úteis para outros arquivos usarem:
module.exports = {
  query: (text, params) => pool.query(text, params), // executa uma consulta SQL (com texto e parâmetros)
  connect: () => pool.connect(), // connect: abre uma conexão direta com o banco (útil em casos específicos)
};


// Importa a classe Pool do módulo 'pg' (PostgreSQL) para gerenciar conexões com o banco de dados
const { Pool } = require('pg');

// Carrega variáveis de ambiente do arquivo .env para process.env
require('dotenv').config();

// Verifica se a variável de ambiente DB_SSL está definida como 'true' (string)
const isSSL = process.env.DB_SSL === 'true';

// Cria um novo pool de conexões com o banco de dados PostgreSQL, usando as variáveis do .env
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,            
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,     
  database: process.env.DB_DATABASE,     
    
  // Se SSL estiver ativado, usa SSL sem verificação de certificado. Caso contrário, desativa SSL.
  ssl: isSSL ? { rejectUnauthorized: false } : false,
});

// Exporta dois métodos úteis para outros arquivos usarem:
module.exports = {
  query: (text, params) => pool.query(text, params), // executa uma consulta SQL (com texto e parâmetros)
  connect: () => pool.connect(), // connect: abre uma conexão direta com o banco (útil em casos específicos)
};


// Importando o módulo 'fs' para ler arquivos do sistema de arquivos
const fs = require('fs');

// Importando o módulo 'path' para trabalhar com caminhos de arquivos de forma segura
const path = require('path');

// Importando o módulo 'Pool' da biblioteca 'pg' (PostgreSQL) para gerenciar conexões com o banco
const { Pool } = require('pg');

// Carregando as variáveis de ambiente definidas no arquivo .env
require('dotenv').config();

// Criando um pool de conexões com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,             // Nome do usuário do banco (vem do .env)
  host: process.env.DB_HOST,             // Endereço do servidor do banco
  database: process.env.DB_DATABASE,     // Nome do banco de dados
  password: process.env.DB_PASSWORD,     // Senha do usuário
  port: process.env.DB_PORT,             // Porta de conexão com o banco
  ssl: {
    rejectUnauthorized: false,           // Aceita conexões SSL mesmo sem certificado autorizado (usado em ambientes como Heroku)
  },
});

// Função assíncrona para executar o script SQL
const runSQLScript = async () => {
  // Monta o caminho completo do arquivo 'init.sql' (onde está o script SQL a ser executado)
  const filePath = path.join(__dirname, 'init.sql');

  // Lê o conteúdo do arquivo SQL como texto
  const sql = fs.readFileSync(filePath, 'utf8');

  try {
    // Executando o script SQL no banco de dados
    await pool.query(sql);
    console.log('Script SQL executado com sucesso!');
  } catch (err) {
    // Caso ocorra algum erro na execução do script, exibe no console
    console.error('Erro ao executar o script SQL:', err);
  } finally {
    // Encerrando a conexão com o banco de dados (fecha o pool)
    await pool.end();
  }
};

// Chama a função para executar o script SQL
runSQLScript();

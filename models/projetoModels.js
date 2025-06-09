const db = require('../config/database');

class Projeto {
  static async getAll(id) {
    const result = await db.query('SELECT * FROM PROJETOS WHERE id_user = $1', [id]);
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM PROJETOS WHERE projeto_id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    console.log('Dados recebidos:', data); // Isso deve imprimir os valores antes da query

    const result = await db.query(
  'INSERT INTO PROJETOS (nome_projeto, descricao_projeto, id_user) VALUES ($1, $2, $3) RETURNING *',
  [ data.nome_projeto, data.descricao_projeto, data.user_id ]

);
    return result.rows[0];
}

  static async update(id, data) {
    const result = await db.query(
      'UPDATE PROJETOS SET nome_projeto = $1, descricao_projeto = $2 WHERE projeto_id = $3 RETURNING *',
      [data.nome_projeto, data.descricao_projeto, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM PROJETOS WHERE projeto_id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Projeto;

const db = require('../config/database');

class Comentario {
  static async getAll() {
    const result = await db.query('SELECT * FROM COMENTARIOS');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM COMENTARIOS WHERE comentario_id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO COMENTARIOS (conteudo, id_tarefa, id_user) VALUES ($1, $2, $3) RETURNING *',
      [data.conteudo, data.id_tarefa, data.id_user]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM COMENTARIOS WHERE comentario_id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Comentario;

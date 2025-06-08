const db = require('../config/database');

class TarefaUsuario {
  static async assignUserToTask(userId, tarefaId) {
    const result = await db.query(
      'INSERT INTO TAREFAS_USUARIO (id_user, id_tarefas) VALUES ($1, $2) RETURNING *',
      [userId, tarefaId]
    );
    return result.rows[0];
  }

  static async getByUserId(userId) {
    const result = await db.query('SELECT * FROM TAREFAS_USUARIO WHERE id_user = $1', [userId]);
    return result.rows;
  }

  static async remove(userId, tarefaId) {
    const result = await db.query(
      'DELETE FROM TAREFAS_USUARIO WHERE id_user = $1 AND id_tarefas = $2 RETURNING *',
      [userId, tarefaId]
    );
    return result.rowCount > 0;
  }
}

module.exports = TarefaUsuario;

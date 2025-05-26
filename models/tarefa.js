const db = require('../config/database');

class Tarefa {
  static async getAll() {
    const result = await db.query('SELECT * FROM TAREFAS');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM TAREFAS WHERE tarefas_id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO TAREFAS 
        (titulo_tarefa, descricao_tarefa, status_tarefa, prioridade_tarefa, data_vencimento, projeto_id, id_user) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [
        data.titulo_tarefa,
        data.descricao_tarefa,
        data.status_tarefa,
        data.prioridade_tarefa,
        data.data_vencimento,
        data.projeto_id,
        data.id_user
      ]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE TAREFAS 
       SET titulo_tarefa = $1, descricao_tarefa = $2, status_tarefa = $3, 
           prioridade_tarefa = $4, data_vencimento = $5 
       WHERE tarefas_id = $6 
       RETURNING *`,
      [
        data.titulo_tarefa,
        data.descricao_tarefa,
        data.status_tarefa,
        data.prioridade_tarefa,
        data.data_vencimento,
        id
      ]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM TAREFAS WHERE tarefas_id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Tarefa;

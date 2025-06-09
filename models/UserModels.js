const db = require('../config/database');

class User {
  static async getAll() {
    const result = await db.query('SELECT * FROM USERS');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM USERS WHERE user_id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
  console.log("Dados recebidos:", data); // Verifique se os dados estão corretos
  const result = await db.query(
    'INSERT INTO USERS (nome_user, email_user, senha_user) VALUES ($1, $2, $3) RETURNING *',
    [data.nome_user, data.email_user, data.senha_user]
  );
  return result.rows[0];
}

  static async update(id, data) {
    const result = await db.query(
      'UPDATE USERS SET nome_user = $1, email_user = $2, senha_user = $3 WHERE user_id = $4 RETURNING *',
      [data.nome_user, data.email_user, data.senha_user, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM USERS WHERE user_id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = User;

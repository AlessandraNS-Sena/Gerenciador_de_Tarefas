const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModels');

const secretKey = process.env.JWT_SECRET || 'chaveSuperSecreta';

class AuthService {
  // Registro de usuário
  static async register(userData) {
    const { nome, email, senha } = userData;

    if (!nome || !email || !senha) {
      throw new Error('Todos os campos são obrigatórios.');
    }

    // Gerar hash da senha
    const hashedPassword = await bcrypt.hash(senha_user, 0);

    // Criar usuário no banco
    const newUser = await User.create({ nome_user, email_user, senha_user: hashedPassword });

    return newUser;
  }

  // Login de usuário
  static async login(email_user, senha_user) {
    const user = await User.getByEmail(email_user);
    
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    // Comparar senha
    const validPassword = await bcrypt.compare(senha_user, user.senha_user);
    if (!validPassword) {
      throw new Error('Senha inválida.');
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id, email: user.email_user }, secretKey, { expiresIn: '1h' });

    return { user, token };
  }

  // Verificar token JWT
  static async verifyToken(token) {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      throw new Error('Token inválido ou expirado.');
    }
  }
}

module.exports = AuthService;
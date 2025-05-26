const User = require('../models/user');

async function test() {
  try {
    // Testar buscar todos os usuários
    const users = await User.getAll();
    console.log('Todos usuários:', users);

    // Testar criação de usuário
    const newUser = await User.create({
      nome_user: 'Teste',
      email_user: 'teste@teste.com',
      senha_user: '12345678'
    });
    console.log('Usuário criado:', newUser);

    // Testar buscar por ID
    const userById = await User.getById(newUser.user_id);
    console.log('Usuário pelo ID:', userById);

    // Testar atualização
    const updatedUser = await User.update(newUser.user_id, {
      nome_user: 'Teste Atualizado',
      email_user: 'testeatualizado@teste.com',
      senha_user: '87654321'
    });
    console.log('Usuário atualizado:', updatedUser);

    // Testar delete
    const deleted = await User.delete(newUser.user_id);
    console.log('Usuário deletado?', deleted);
  } catch (err) {
    console.error('Erro:', err);
  }
}

test();

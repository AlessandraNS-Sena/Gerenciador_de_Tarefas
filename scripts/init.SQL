--CRIANDO TABELA SOBRE A CONDICIONAL "SE NÃO EXISTE" 
create table IF NOT EXISTS USERS(

  user_id SERIAL primary key,

  nome_user text not null,

  email_user text unique not null,

  senha_user varchar(8) not null,

  data_criacao_conta date default current_date

);


--CRIANDO TABELA SOBRE A CONDICIONAL "SE NÃO EXISTE" 
create table IF NOT EXISTS PROJETOS(

  projeto_id SERIAL primary key,

  nome_projeto text not null,

  descricao_projeto text not null,

  id_USER int not null,

  constraint fk_usuario foreign key (id_USER)references USERS(user_id),

  data_criacao_projeto date default current_date

);

--CRIANDO TABELA SOBRE A CONDICIONAL "SE NÃO EXISTE" 
create table IF NOT EXISTS TAREFAS(

  tarefas_id serial primary key,

  titulo_tarefa text not null,

  descricao_tarefa text not null,

  status_tarefa text check(status_tarefa in('pendente','em andamento','concluído'))default'pendente',

  prioridade_tarefa text check(prioridade_tarefa in('baixa','media','alta'))default'baixa',

  data_vencimento date not null,

  projeto_id int not null,

  id_USER int not null,

  data_criacao_tarefa timestamp default current_timestamp,

  constraint fk_projeto foreign key (projeto_id)references PROJETOS(projeto_id),

  constraint fk_usuario foreign key (id_USER)references USERS(user_id)

);

--CRIANDO TABELA SOBRE A CONDICIONAL "SE NÃO EXISTE" 
create table IF NOT EXISTS COMENTARIOS(

  comentario_id serial primary key,

  conteudo text not null,

  id_tarefa int not null,

  id_USER int not null,

  constraint fk_tarefa foreign key (id_tarefa)references TAREFAS(tarefas_id),

  constraint fk_user foreign key (id_USER)references USERS(user_id),

  data_criacao_comentario timestamp default current_timestamp

);

--CRIANDO TABELA SOBRE A CONDICIONAL "SE NÃO EXISTE" 
create table IF NOT EXISTS TAREFAS_USUARIO(

  id_USER int not null,

  id_tarefas int not null,

  primary key (id_USER, id_tarefas),

  constraint fk_user foreign key (id_USER)references USERS(user_id),

  constraint fk_tarefas foreign key (id_tarefas)references TAREFAS(tarefas_id)

);
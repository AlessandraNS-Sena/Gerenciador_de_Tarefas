create table if not exists USERS(

  user_id SERIAL primary key,

  nome_user text not null,

  email_user text not null,

  senha_user varchar(8) not null,

  data_criacao_conta date default current_date

);

create table if not exists PROJETOS(

  projeto_id SERIAL primary key,

  nome_projeto text not null,

  descricao_projeto text not null,

  id_USER int not null,

  constraint fk_usuario foreign key (id_USER)references USERS(user_id),

  data_criacao_projeto date default current_date

);

create table if not exists TAREFAS(

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

create table if not exists TAREFAS_USUARIO(

  id_USER int not null,

  id_tarefas int not null,

  primary key (id_USER, id_tarefas),

  constraint fk_user foreign key (id_USER)references USERS(user_id),

  constraint fk_tarefas foreign key (id_tarefas)references TAREFAS(tarefas_id)

);
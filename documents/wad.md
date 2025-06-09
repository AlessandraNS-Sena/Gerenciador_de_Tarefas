# Introdução

Um gerenciador de tarefas é uma ferramenta utilizada para gerir projetos em equipe e de cunho individual com relação a prioridade e tempo. Este tipo de ferramenta é fundamental para organização e mediação de trabalhos, sendo recomendada para pessoas que participam de projetos e precisam realizar a divisão correta de tarefas e atribuições.

Segundo uma pesquisa realizada pela ONG Junior Achievement (JA) Brasil em 2024, cerca de 61,9% dos jovens não realizam ou não sabem realizar gestão de terafas, um problema que só tem crescido ultimamente entre a população. Um caso preocupante ao pensar nos futuros líderes do país e do mundo. Infelizmente, esta realizade se dá muitas vezes por conta da falta de uma ferramenta que seja intuitiva e simples para que os usuários não se percam em suas funcionalidades.

Neste contexto surge a Pomodorganiza, a ferramenta de gerenciamento de tarefas que promete organização e produtividade ao usuário, contanto com uma interface clara e objetiva, proporcionando o engajamento dos usuários e melhor gestão de sua vida profissional e pessoal.

# Modelo lógico e modelo físico do banco de dados

O modelo lógico do banco de dados foi criado com o objetivo de proporcionar melhor visualização e planejamento ao projeto que está sendo desenvolvido, proporcionando assim um planejamento objetivo em realação aos elementos (tabelas, variáveis, etc.) presentes no banco de dados do projeto.

![modelo lógico](../assets/modelo-logico-bd.png)
Autora: Alessandra Nascimento Santos Sena
Framework: LucidChart

Como pode ser visto neste modelo lógico do Pomodorganiza, foram criadas 5 tabelas ao total para armazenar itens importantes da plataforma de gerenciamento de tarefas. Para sinalizar as chaves primárias de cada tabela, foi utilzado a abreviação PK (Primary Key) para melhor identificação dos desenvolvedores do banco. Para sinalizar as chaves estrangeiras foi feito o mesmo, utilizamos a abreviação FK (Foreign Key) para que fossem facilmente identificadas. Também foram adicionadas as cardialidades em cada conexão entre as tabelas, indicando o relacionamento entre elas.

Após esta organização prévia, podemos enfim contruir as tabelas dentro do banco de dados, nos baseando no que foi planejado ao realizar o modelo lógico. A prática desta nova criação é o modelo físico do nosso banco, que ao ser finalizado se mostra da seguinte forma:

```sql
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
```

Com a criação das tabelas, o modelo físico é criado e assim podemos visualizar a estrutura final do banco de dados:

![modelo físico](../assets/modelo-fisico.png)
Autora: Alessandra Nascimento Santos Sena
Framework: Supabase

# Diagrama da Arquitetura MVC

O diagrama da arquitetura MVC é utilizado para a comprensão e entendimento da emplementação da aplicação web de maneira simples.

![Arquitetura MVC](../assets/mvc.png)
Autora: Alessandra Nascimento Santos Sena
Framework: Lucidchart.com

# Visualização das views implementadas

Conforme a realização da aplicação do projeto, as views deverão seguir a seguinte sequência: 

### Tela de login

![Tela de Cadastro](../assets/TelaLogin.png)
Autora: Alessandra Nascimento Santos Sena

### Tela Home

![Tela Home](../assets/TelaHome.png)
Autora: Alessandra Nascimento Santos Sena

### Tela Criar Projeto

![Adicionar Projeto](../assets/AdicionarProjeto.png)
Autora: Alessandra Nascimento Santos Sena

### Tela com o Projeto

![Novo Projeto](../assets/NovoProjeto.png)
Autora: Alessandra Nascimento Santos Sena

### Tela de Tarefas

![Tarefas](../assets/Tarefa.png)
Autora: Alessandra Nascimento Santos Sena

### Tela Adicionar Tarefa

![Nova Tarefa](../assets/AdicionarTarefa.png)
Autora: Alessandra Nascimento Santos Sena
# POMODORGANIZA

## Descrição

O pomodorganiza é uma plataforma de gerenciamento de tarefas simples e intuitiva, que surgiu com o intuito de ajudar pessoas que possuem problema de controle organizacional de suas vidas profissionais e pessoais, precisando de uma ferramenta que facilite a sua separação de tarefas e gerenciamento de projetos.

## Estrutura de páginas

```
Gerenciador_de_Tarefas/
│
├── assets/ 
    └── modelo-fisico.png
    └── modelo-logico-bd.png
    └── mvc.png  
├── config/  
│   └── database.js
├── controllers/   
    └── projetoController.js
    └── tarefaController.js
    └── tarefaUsuarioController.js
    └── userController.js
├── documents/
    └── wad.md
├── models/
    └── projeto.js
    └── tarefa.js
    └── tarefaUsuario.js  
│   └── User.js
├── public/
    └── imagens/
	├── icone-perfil.png
    	└── logoPomorganiza.png 
│   └── styles/
    	└── cadastro.css
    	└── projetos.css  
	└── tarefas.css
├── routes/
    └── frontRoutes.js   
    └── index.js
    └── projetos.js
    └── tarefas.js
    └── tarefasUsuarios.js
│   └── users.js
├── scripts/
    └── init.SQL   
│   └── runSQLScripts.js  
├── tests/   
│   └── example.test.js
├── views/   
│   └── cadastro/
	├── main.ejs   
    ├── tarefas/   
        └── tarefas.ejs
    ├── main.ejs   
│   
├── .env
├── .env.example
├── .gitattributes
├── .gitignore
├── jest.config.js   
├── package-lock.json  
├── package.json   
├── readme.md  
├── rest.http   
└── server.js  

```

- ``config/:`` Configurações do banco de dados e outras configurações do projeto.
- ``controllers/:`` Controladores da aplicação (lógica de negócio).
- ``models/:`` Modelos da aplicação (definições de dados e interações com o banco de dados).
- ``routes/:`` Rotas da aplicação.
- ``scripts/:`` Ligação com o banco de dados.
- ``tests/:`` Testes automatizados.
- ``views/:`` Views da aplicação
- ``documents/:`` Armazena o arquivo WAD.md do projeto.
- ``assets/:`` Assets utilizados no projeto.
- ``styles/:``Estilização da aplicação.

## Como executar o código

PARTE 1:

Primeiro é necessário que a sua máquina esteja equipada com o framework node.js na versão mais recente e devidamente executável por meio do aplicativo do vscode. O segundo passo é clonar este repositório para ter acesso aos arquivos .js, .json, .md e .env utilizados neste projeto. O terceiro passo é abrir o terminar dentro do projeto e digitar:  `` npm init - y`` e logo depois disso: ``npm install express`` para instalar o express. Por fim, para verificar o funcionamento do projeto, digite ``node server.js`` no terminal.

PARTE 2:

Primeiro é necessário preencher o arquivo .env.example utilizando a conexão de um banco de dados próprio criado para esta conexão com o script do banco de dados presente na documentação do arquivo wad.md, depois abrir o terminal e digitar ``npm run init-db ``, em seguida intalar o express por meio do comando no terminal `` npm intall express``, utilizar o comando para instalar o modolo pg por meio do ``npm install pg``, intalar o modulo dotenv por meio do ``nmp intall dotenv`` e por fim escrever o comando ``node server.js`` para o funcionamento da aplicação até o momento.

PARTE 3:

Com os dois passos anteriores realizado, basta abrir o terminal do vscode e digitar `node server.js` para que apareca a visualização da porta onde a aplicação está rodando. Para verificar a view, basta pressionar a tecla `ctrl` e clicar no link que apareceu que uma guia no seu navegador padrão será aberta, possibilitando a visualização.

PONTOS DE ATENÇÃO: O email do usuário é ÚNICO, logo, ao testar a aplicação, certifique-se de utilizar um email diferente para cada entrada (toda a vez que iniciar a aplicação do zero).

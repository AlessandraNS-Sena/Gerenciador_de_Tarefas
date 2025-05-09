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
├── config/                
│   └── database.js
├── controllers/           
│   └── HomeController.js
├── documents/
    └── wad.md
├── models/                
│   └── User.js
├── routes/                
│   └── index.js
├── services/              
│   └── userService.js            
├── scripts/               
├── styles/                
├── tests/                 
│   └── example.test.js             
├── .env           
├── jest.config.js         
├── package-lock.json      
├── package.json           
├── readme.md              
├── rest.http             
└── server.js              

```

- ```config/:``` Configurações do banco de dados e outras configurações do projeto.
- ```controllers/:``` Controladores da aplicação (lógica de negócio).
- ```models/:``` Modelos da aplicação (definições de dados e interações com o banco de dados).
- ```routes/:``` Rotas da aplicação.
- ```tests/:``` Testes automatizados.
- ```views/:``` Views da aplicação
- ```documents/:``` Armazena o arquivo WAD.md do projeto.
- ```assets/:``` Assets utilizados no projeto.

## Como executar o código

Primeiro é necessário que a sua máquina esteja equipada com o framework node.js na versão mais recente e devidamente executável por meio do aplicativo do vscode. O segundo passo é clonar este repositório para ter acesso aos arquivos .js, .json, .md e .env utilizados neste projeto. O terceiro passo é abrir o terminar dentro do projeto e digitar:  ``` npm init - y``` e logo depois disso: ```npm install express``` para instalar o express. Por fim, para verificar o funcionamento do projeto, digite ```node server.js``` no terminal. 
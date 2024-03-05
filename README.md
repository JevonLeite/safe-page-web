# DOCUMENTAÇÃO

## Introdução
A presente documentação tem por objetivo realizar a descrição do projeto front-end do desafio técnico da Hubbe e disponibilizar as devidas instruções para executá-lo.

## Descrição do Projeto
O projeto tem por objetivo disponibilizar uma aplicação, onde determinada tela permite o acesso de apenas 1 usuário por vez. Para isso, no front-end foi criado uma landing page e a tela segura. A landing page possui um botão que faz o redirecionamento à tela segura, mas a tela segura também pode ser acessada pela rota **/safe**.\
Ao acessar a rota **/safe**, o front-end faz uma solicitação à API para verificar a disponibilidade da página. O conteúdo principal da página é renderizada somente após a verificação e permissão da API, onde em casos de acesso negado, o usuário é redirecionado à landing page.\
Enquanto o usuário está na tela segura, é feita uma solicitação à API a cada minuto, mantendo a sessão sempre atualizada, para devidas validações por parte do back-end, caso o usuário saia da página de forma inesperada, evitando assim que a tela fique indisponível.\
Não foi utilizado localStorage do navegador para armazenar a sessão, fazendo com que além da tela não poder ser acessada por mais de 1 usuário por vez, também não pode ser acessada em mais de uma aba por vez pelo mesmo usuário.

## Tecnologias
Para o front-end foi utilizado TypeScript como linguagem de programação, React para criação da interface do usuário, React Router para controle de rotas e Axios para cliente HTTP. Também foi utilizado o Jest e React Testing Library para a implementação de alguns testes.

## Pré-requisitos
Necessário utilizar uma versão do **node.js** acima de 20.

## Configurações
Para iniciar o projeto, é necessário seguir as seguintes etapas:

1. Dentro da pasta do projeto, renomear o arquivo **.env.example** para **.env**;

2. Caso a porta do servidor for alterada no back-end, será necessário alterar a variável **VITE_API_URL** dentro do **.env**;

3. Através de um terminal, acessar a pasta do projeto e executar o comando **yarn install** ou **npm install**;

## Execução
Através de um terminal, acessar a pasta do projeto e executar o comando **yarn start** ou **npm start**.


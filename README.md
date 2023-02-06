# Brawl Stars Club Analytics API

O propósito desse projeto é gerar e fornecer informações relevantes sobre clubes e seus membros, possibilitando que administradores de clubes possam acompanhar o desempenho dos times, facilitando a tomada de decisões dentro do clube.

Exemplos de funcionalidades que podem ser obtidas com esse projeto:

- Monitoramento de clubes: basta cadastrar o ID do seu clube e o sistema fará todo o resto.

- Criação de grupos de clubes: agrupe seus clubes em uma única visão e acompanhe facilmente o desempenho de todos os membros dos clubes agrupados.

- Rastreamento dos times: o sistema reconhece sozinho os times/trios existentes dentro do clube e rastreia suas atividades, permitindo saber a quantidade de partidas que o time tem jogado em conjunto, bem como a quantidade de derrotas e vitórias, além do desempenho dos times na Liga de Clubes, Liga Estelar e também em partidas normais.

- Ranking interno do clube: saiba quais são os times e jogadores mais engajados e com a melhor performance.

- E muito mais!

# Implementação técnica

O projeto possui uma API com funcionalidades como: cadastro de clubes, cadastro de grupos de clubes e a geração de relatórios analíticos como mencionado acima.

Os dados processados são obtidos das seguintes fontes:
- API oficial do Brawl Stars (https://developer.brawlstars.com)
- API não oficial do Brawl Stars (https://brawlapi.com)

Uma vez que o clube foi cadastrado, um conjunto de schedule jobs passa a ser executado periodicamente e de forma totalmente automática com a intenção de gerar e manter os dados analíticos a respeito do clube e de seus membros!

# Tecnologias utilizadas:
- NodeJs
- Typescript
- Postgres
- Knex
- Node-schedule

# Configurando o postgress

1. Instale a ultima imagem do postgress disponivel no docker `docker pull postgres`

2. Crie um container postgres executando `docker run --name database -e POSTGRES_USER=localhost -e POSTGRES_PASSWORD=localhost -p 5432:5432 -d postgres:11`.

  O comando acima cria um container postgres cujas credenciais de conexão são:
  
  DB_HOST=5432 <br />
  DB_USERNAME=localhost <br />
  DB_PASSWORD=localhost <br />

3. Acesse esse banco de dados usando um admin do postgres (como o PostBird) e crie um novo banco de dados chamado `bs_club_analytics`

4. Insira os dados de conexão no arquivo .env, como o exemplo abaixo:

  DB_HOST=localhost <br />
  DB_PORT=5432 <br />
  DB_USERNAME=localhost <br />
  DB_PASSWORD=localhost <br />
  DB_DATABASE=bs_club_analytics <br />

# Como rodar o projeto:

1. Clonar o repositório em seu computador.
2. Instalar as dependencias executando o comando `Yarn` no terminal.
3. Configure o postgres como mencionado na seção "Configurando o postgress"
4. Execute o comando `yarn migrate` para rodar as migrations e criar as tabelas no DB
5. Executar o comando `yarn:dev` para iniciar a API.

# Adicionais:

Acompanhe o quadro de desenvolvimento por meio do trello:<br />
https://trello.com/b/0wcEW3Wh/brawl-stars-club-analytics

Importe a coleção de requisições da API no postman pelo link:<br />
https://www.getpostman.com/collections/63c63872520de0a5d878
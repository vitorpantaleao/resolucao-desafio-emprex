# API NodeJS com Express, que retorna os dados para um app VueJS

## Objetivo do Projeto
Criar uma API NodeJS com Express que retorne os dados de um arquivo JSON para um app VueJS.

## Tecnologias utilizadas
- NodeJS
- Express
- Nodemon

## Setup
Após clonar o repositório, instale as dependências com o comando:

```
npm install
```

### Execute o projeto com o comando:

```bash
npm start

# http://localhost:3001
```

## Endpoint da API
- _GET_- /loans

### O endpoint aceita os seguintes parâmetros:
- **page** - Número da página que será retornada.
- **itemsPerPage** - Quantidade de itens por página.
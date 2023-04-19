# Resolução de desafio - Emprex
O projeto está dividido em duas partes, uma parte de front-end e outra de back-end. O front-end foi desenvolvido utilizando VueJS, Vuetify, Firebase e Axios. O back-end foi desenvolvido utilizando Express.js.

## Desafio
- Crie um app VueJS que utilize o firebase como controle de usuário
- Desenvolva um backend simples (Express.js) que retorne o Json em anexo quando o front chamar o endpoint /loans e o usuário estiver logado
- Crie um componente Vue chamado LoansList que renderize uma lista de empréstimos em uma tabela usando o componente v-data-table do Vuetify. Os empréstimos devem ser carregados a partir de uma API REST usando o plugin axios.
- Adicione filtros de pesquisa e ordenação na tabela usando os recursos do v-data-table. Os filtros devem permitir que o usuário pesquise empréstimos por status e por expiryDate, firstPaymentDate, disbursementDate. A ordenação deve permitir que o usuário ordene os empréstimos pelas datas expiryDate, firstPaymentDate, disbursementDate e pelos totais totalAmount e disbursedAmount.
- Adicionar paginação à tabela buscando apenas quantidades de registros necessários do back-end.
- Adicione edição de todos os campos menos do id e do contractNumber além da possibilidade de exclusão do registro (tudo apenas no front-end).

## Requisitos
- Utilizar VueJS
- Utilizar Vuetify
- Utilizar Firebase
- Utilizar Express.js
- Utilizar Axios
- Utilizar Git

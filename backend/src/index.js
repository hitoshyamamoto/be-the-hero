const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
*  Rota / Recurso
*/

/*
*  Métodos HTTP
*
*  GET    : Buscar uma informação do back-end
*  POST   : Criar uma informação no back-end
*  PUT    : Alterar uma informação no back-end
*  Delete : Deletar uma informação no back-end
*/

/*
* Tipos de Parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?"
*           (servem para filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
*/

/**
 *    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongoDB, CouchDB, etc
 */

 /**
  *        Driver: SELECT = FROM users
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333);
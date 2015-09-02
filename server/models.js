var settings = {
  client: 'sqlite3',
  connection: { filename: './lxtr.sqlite3' }
};
var db = require('knex')(settings);
var bookshelf = require('bookshelf')(knex);
var models = {};

models.Word = bookshelf.Model.extend({
  tableName: 'words'
});

module.exports = models;
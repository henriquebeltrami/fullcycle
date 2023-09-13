const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database:'db'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

var listPeople = '';
var listNames = '';

connection.query("SELECT name FROM people", function (err, result, fields) {
  if (err) throw err;
  listPeople = result;
  for (var i = 0; i < listPeople.length; i++) {
    listNames+='<li>'+listPeople[i].name+'</li>';
  }
});

connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1><br/><ul>'+listNames+'</ul>')
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  let input = process.argv[2];
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log('Searching...')
  let sql = `SELECT id, name, born FROM people WHERE name LIKE '%${input}%'`
  client.query(sql , (err, result) => {

    debugger;
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].id, result.rows[0].name, result.rows[0].born);
    client.end();
  });
});
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
  let input = process.argv.slice(2);
  console.log('input= ', input);
  debugger;
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT name FROM people WHERE name LIKE '%`${input}`%'" , (err, result) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>RESULT= ', result);
    debugger;
    if (err) {
      return console.error("error running query", err);
    }
    client.end();
  });
});
const {Client}=require("pg")
const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'y20cb042',
    database:'onlinevidya'
})
client.connect(function(err) {
    if (err) {
      return console.error('error: '+err.message)
    }
    console.log('Connected to Database Successfully.')
})
const query = 'CREATE TABLE students ( sno INTEGER,Name VARCHAR ,Phone VARCHAR,email VARCHAR,course VARCHAR );'
client.query(query, (err, res) => {
    if (err) {
        return console.error('error: '+err.message)
    }
    console.log('students Table is Created Successfully.')
    client.end()
})
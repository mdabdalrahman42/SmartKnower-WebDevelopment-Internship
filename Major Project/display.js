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
})
console.log('Data in students Table is : ')
client.query("SELECT * FROM students", (err, res) => {
    if (err) {
        return console.error('error: '+err.message)
    }
    console.log(res.rows)
    client.end()
})
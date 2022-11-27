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
client.query("INSERT INTO students (sno,Name,Phone,email,course) VALUES (1,'Raj','0123456789','abc@gmail.com','Web Development')", (err, res) => {
    if (err) {
        return console.error('error: '+err.message)
    }
    console.log('Required Data is Inserted into students Table Successfully.')
    client.end()
})
let express = require('express')

let usercccc = require('./routes/user')
let admin = require('./routes/admin')
const { urlencoded } = require('body-parser')
let app = express()
app.use(urlencoded({extended:true}))
app.use(express.json())
app.use('/user',usercccc)
app.use('/admin',admin)


app.listen(8090,()=>{
    console.log("port is 8090");
})
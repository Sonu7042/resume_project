const express= require('express')
const router= require('./routes/route')
const cors= require('cors')
const connectDB=require('./db/db')
const app= express()
app.listen(9000, ()=>{
    console.log("server is listening...")
})

connectDB()

app.use(cors())
    

app.use(express.json())
app.use('/', router)


app.get('/result', (req, res)=>{
    res.send("Hello I am woring fine")
})
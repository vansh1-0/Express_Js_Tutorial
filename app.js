const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))//middle man to connect app to public folder's style.css

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html')
})

app.get('/product/:id',(req,res)=>{
    var a=req.params.id
    res.send("product details is " + a)
})

app.get('/search',(req,res)=>{
    var a=req.query.q
    res.send("product details is " + a)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log(`Started on http://localhost:${port}`)
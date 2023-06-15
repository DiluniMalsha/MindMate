const express = require("express")
const app = express()

app.use((req, res)=>{
    res.json({"hello": "jhjdscdsjch"})
})

app.listen(8080)
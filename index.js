import 'dotenv/config'
import express from "express";

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port `);
})
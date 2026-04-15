const express = require("express")
const app = express()

const port = 4000

const a = 10 
const b = 20
const sum = a + b
console.log(sum);

x = 10;
console.log("x:",x)

app.get("/",(req,res)=>{
    res.send("tha value" + sum);
})



app.listen(port, () => {
    console.log("backend running")
})
const express = require("express")
const app = express()

const port = 4000

const a = 10 
const b = 20
const sum = a + b
console.log(sum);

x = 10;
console.log("x:"+ x)

let p = 1;
while( p<=10){
    console.log(p)
    p++;
}
let q = 2;
while(q<10){
    console.log(q)
}

app.get("/",(req,res)=>{
    res.send("tha value" + sum);
})
app.get("/about",(req,res)=>{
    res.send("x value:" + x);
})

app.get("/home",(req,res)=>
{
    res.send("p value :"+p)
})

app.listen(port, () => {
    console.log("backend running")
})
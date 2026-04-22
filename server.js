const express = require("express")
const app = express()

const port = 4000

// const a = 10 
// const b = 20
// const sum = a + b
// console.log(sum);

// x = 10;
// console.log("x:"+ x)

// let p = 1;
// while( p<=10){
//     console.log(p)
//     p++;
// }
// let q = 2;
// while(q<5){
//     console.log(q)
// }


// let i = 10;
//  sum =0;
// while(i<=10){
//     sum = sum + i;
//     i++;
//     console.log(i)
// }

let m = 1;

while(m <= 10){
    console.log("2 x " + m + " = " + (2 * m));
    m++;
}

let n = 0;
while(n<=20){
    console.log("3 * " + n + " = " +(3 * n));
    n++;
}

let v = 5;
while(v<=1)
{
    console.log("1 x " + v + " = " +(1 * v));
    v++;
}

let i = 5;

while(i >= 1){
    console.log("1 x "+i+" = "+(1*i));
    i--;
}

let result = ""
for(let w = 1;w<=4;w++){
    result = result + w;
    console.log("*")
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


app.get("/",(req,res)=>{

})
app.listen(port, () => {
    console.log("backend running")
})
const express=require('express')
const app=express()
const data=require('../data.json')
app.get('./',(req,res)=>{
    res.send(data)

})
app.post('/login',(req,res)=>{
    let incomingdata=req.body;
    console.log(incomingdata);
    res.send(incomingdata);
})
app.listen(5000,()=>{
    console.log("server1")
}
)
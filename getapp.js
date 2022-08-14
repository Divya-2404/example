const express=require('express')
const app=express()
const data=require('../data.json')
app.get('./',(req,res)=>{
    res.send(data)

})
app.get('/first',(req,res)=>{
    res.send(data[0])
})
app.listen(5000,()=>{
    console.log("server1")
}
);

const express=require('express')
const app=express()
const data=require('../data.json')

app.delete('/',(req,res)=>{
   
    res.send(deleted);
})
app.listen(5000,()=>{
    console.log("server1")
}
);
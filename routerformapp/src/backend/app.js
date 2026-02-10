const express=require('express');
const app=express();
const PORT=7878;
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
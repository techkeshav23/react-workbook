// import sum from './getdata.js';
const sum=require('./getdata');
const http=require('http');
const port=4005;
const server=http.createServer(async(req,res)=>{
    // res.setHeader('Content-Type','application/json');
    // res.end('<h2>Hiiiii......</h2>');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    if(req.url==='/msg' && req.method==='GET'){
        res.setHeader('Content-Type','text/html');
        res.end('<h1 style="background-color:blue; color:white;">Welcome to the Node Server</h1>');
    }
    if(req.url==='/data' && req.method==='GET'){
        console.log("hhiiiiii")
        const result= await sum();
        console.log('result:', result);
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:result}));
    }
    if(req.url==='/data' && req.method==='PUT'){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:'Data updated successfully'}));
    }
    // console.log(Object.keys(req));
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

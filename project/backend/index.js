const http=require('http');
const sum=require('./fetchAPI')
const fs=require('fs').promises
const {readData,writeData}=require('./usefsmodule')
const PORT=4002;

const server=http.createServer(async(req,res)=>{
// res.setHeader('Content-Type','application/json');
// // res.end('<h2>Welcome to Node Server</h2>')
// res.end(JSON.stringify({msg:"Welcome to Node Server"}))

 res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests (OPTIONS method)
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

if(req.url=='/msg' && req.method=="GET"){
    res.setHeader('Content-Type','text/html')
    res.end("<h2>Greeting of the day</h2>")
}

else if(req.url=="/data" && req.method=="GET"){
               
  res.setHeader('Content-Type','application/json')
  const data=await sum();
    res.end(JSON.stringify({msg:data}))

}

else if(req.url=="/datawrite" && req.method=="GET"){
               
  res.setHeader('Content-Type','application/json')
  const data=writeData();
    res.end(JSON.stringify({msg:data}))

}

else if(req.url=="/dataread" && req.method=="GET"){
               
  res.setHeader('Content-Type','application/json')
  const data=readData();
    res.end(JSON.stringify({msg:data}))

}

else if(req.url=="/register" && req.method=="POST"){

  let arr=[];
  let body="";

  req.on("data",chunk=>{
    body+=chunk
  })

  req.on('end',async()=>{
    const {name,email,password}=JSON.parse(body);
       const fdata=await fs.readFile('student.json',{encoding:'utf-8'})
             arr=JSON.parse(fdata);

             const status=arr.find(ele=>ele.email==email);
             if(status){
              res.setHeader('Content-Type','application/json')
  
            res.end(JSON.stringify({msg:"Email is already registered"}))
             }
             else{
                arr.push({name,email,password})

                await fs.writeFile('student.json',JSON.stringify(arr,null,2));
             res.setHeader('Content-Type','application/json')
  
            res.end(JSON.stringify({msg:"student register successfully!!!"}))

             }
       // console.log(name+email+password)
         
  })
               
 

}


else if(req.url=="/login" && req.method=="POST"){

  let arr=[];
  let body="";

  req.on("data",chunk=>{
    body+=chunk
  })

  req.on('end',async()=>{
    const {email,password}=JSON.parse(body);
    console.log(email+password)
       const fdata=await fs.readFile('student.json',{encoding:'utf-8'})
             arr=JSON.parse(fdata);

             const status=arr.find(ele=>ele.email==email && ele.password==password);
             if(status){
              res.setHeader('Content-Type','application/json')
  
                  res.end(JSON.stringify({msg:"success"}))
             }
             else{
                res.setHeader('Content-Type','application/json')
  
                  res.end(JSON.stringify({msg:"Invalid user"}))
             }
  })
  

}


else{
    res.setHeader('Content-Type','text/html')
    res.end("<h2 style='color:red'>Invalid end point</h2>")
}

})

server.listen(PORT,()=>{
    console.log("Server is running on "+PORT)
})
const http = require('http');
const getdata = require('./fetchapi');
const PORT = 4002;
const server = http.createServer(async(req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  res.statusCode = 200;
if(req.url=='/msg' && req.method=="GET")
{
    res.setHeader('Content-Type','text/html');
    res.end('<h2>Greeting of the day!</h2>');
}
else if(req.url=='/data' && req.method=="POST")
    {
        // const student={
        //     name:"Keshav",
        //     age:22,
        //     college:"ABES Engineering College"
        // };
        const data = await getdata();
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({data}));
    }
else {
    res.setHeader('Content-Type','text/html');
    res.end('<h2 style="color:red">Invalid end point!</h2>');
}
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 
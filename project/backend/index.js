const http = require('http');
const getdata = require('./fetchapi');
const PORT = 4002;
const fs=require('fs').promises;
const { readData, writeData, deleteData, copyData, readFileAsync } = require('./usefsmodule');
const { register } = require('module');
const server = http.createServer(async (req, res) => {
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
    if (req.url == '/msg' && req.method == "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>Greeting of the day!</h2>');
    }
    else if (req.url == '/data' && req.method == "GET") {
        // const student={
        //     name:"Keshav",
        //     age:22,
        //     college:"ABES Engineering College"
        // };
        const data = await getdata();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/datawrite' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const data = await writeData();
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/dataread' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const data = await readData();
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/datadel' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const data = await deleteData();
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/datacopy' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const data = await copyData();
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/dataasyncread' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json');
        const data = await readFileAsync();
        res.end(JSON.stringify({ data }));
    }
    else if (req.url == '/register' && req.method == "POST") 
        {
        let arr = [];
        let body = "";
        req.on("data", chunk => {
            body = body + chunk
        })
        req.on("end", async () => {
            const {name,email,password}=JSON.parse(body);
            // console.log(name+email+password);
            const fdata= await fs.readFile('student.json', { encoding: 'utf-8' })
                arr = JSON.parse(fdata);
                const status=arr.find(ele=>ele.email==email);
                if(status)
                {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({msg:"Email is  already registered" }));
                }
                else 
                {
                    arr.push({name,email,password});
                    await fs.writeFile('student.json', JSON.stringify(arr,null,2));
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({msg:"student registered successfully" }));
                }
        });
        }
else if (req.url == '/login' && req.method == "POST") {
        let arr = [];
        let body = "";
        req.on("data", chunk => {
            body = body + chunk
        }
        )
        req.on("end", async () => {
            const {email,password}=JSON.parse(body);
            const fdata= await fs.readFile('student.json', { encoding: 'utf-8' })
                arr = JSON.parse(fdata);
                const status=arr.find(ele=>ele.email==email && ele.password==password);
                if(status)
                {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({msg:"User logged in successfully" }));
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({msg:"Invalid email or password" }));
                }
    })
}
    else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2 style="color:red">Invalid end point!</h2>');
    }
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 
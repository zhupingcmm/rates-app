const http = require('http');
const path = require('path');
const {readContent} = require('./utils');

const actionMap = [
    {
        uri: /^\/rates/,
        handler:(req, res)=>{
            readContent(path.join(__dirname,'../mock/rates.json'))
            .then(data=>{
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(data);
                res.end();
            })
        }
    },

    {
        uri: /^\/usdrates/,
        handler:(req, res)=>{
            readContent(path.join(__dirname,'../mock/usd-rates.json'))
            .then(data=>{
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(data);
                res.end();
            })
        }
    },

    {
        uri: /^\/gbdrates/,
        handler:(req, res)=>{
            readContent(path.join(__dirname,'../mock/gbd-rates.json'))
            .then(data=>{
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.write(data);
                res.end();
            })
        }
    },

    
]


const server = http.createServer((req,res)=>{
    // console.log("res::",req.url)
    // 收到请求 RPC
    const actions = actionMap.filter(({uri}) => uri.exec(req.url));
    // console.log('actions:::',actions)
    actions.forEach(action => action.handler(req, res));
})

server.listen(3001,()=>{
    console.log('server is running on htttp://localhost:3001')
})
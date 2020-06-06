const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);


/*
  Convert ISO Time string to a JSON string with hour, minute, and second values
*/
function parseTime(isoTime){
    let date = new Date(isoTime);
    let result = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
    
    return JSON.stringify(result);
}

/*
   Convert ISO time string to unix epoch in milisecconds 
*/
function unixTime(isoTime){
    let date = new Date(isoTime);
    let result = {
        "unixtime": date.getTime()
    };
    return JSON.stringify(result);
}

/*
  Create HTTP Server to handle API Requests
*/
const server = http.createServer((req, res) => {
    if(req.method == "GET"){
        let parsedURL = new URL(req.url, 'http://localhost');
        res.writeHead(200, 'Content-Type: application/json');

        if(parsedURL.pathname == '/api/parsetime'){
            return res.end(parseTime(parsedURL.searchParams.get('iso')));
        }else if(parsedURL.pathname == '/api/unixtime'){
            return res.end(unixTime(parsedURL.searchParams.get('iso')));
        }
    }
});

server.listen(port);



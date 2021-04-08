const http=require('http')
var db=require('./myfirstmodule')
http.createServer(function(req, res){

res.writeHead(200, {'Content-Type':'text/plain'})
res.write("Hello World\n Today is " + db.Givedate())
res.end('Killing the response object here')
}


).listen(8080, ()=>{

    console.log("The server is running on port 8080")
})


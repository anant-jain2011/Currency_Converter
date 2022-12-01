var http = require('http'); 

  

var app = http.createServer(function(req,res){ 

    res.setHeader('Content-Type', 'application/json'); 

    res.end(JSON.stringify({ number: 1 , name: 'John'})); 
}); 

  
app.listen(3000);

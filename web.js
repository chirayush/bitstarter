var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
    response.send(getIndexData());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var getIndexData = function() {
    var data = fs.readFileSync("index.html");
//    console.log(data);
//    console.log(data.length);
    var ds = data.toString("utf-8", 0, data.length-1);
    console.info(ds);
    return ds;
}

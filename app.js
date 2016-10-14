var express = require('express')
  , app = express()

app.use(express.static('public'));

var server = app.listen(8080, function() {
    console.log('Express is listening to http://localhost:8080');
});

// stuff goes here

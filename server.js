var express = require('express')
var path        = require('path');
var app = express();

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.listen(8000);

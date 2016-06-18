var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('common'));
app.use(gzippo.staticGzip("" + __dirname + "/build"));
app.listen(process.env.PORT || 5000);

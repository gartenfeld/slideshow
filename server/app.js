var path = require('path');
var express = require('express');
var app = express();
var api = require('./handler');

var publicDIR = path.join(__dirname, '../client');
var npmDIR = path.join(__dirname, '../node_modules');
app.use(express.static(publicDIR));
app.use('/lib', express.static(npmDIR));

app.get('/', function (req, res) {
  res.redirect('app.html');
});

app.get('/api/:position', api);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
 
app.listen(server_port, server_ip_address);
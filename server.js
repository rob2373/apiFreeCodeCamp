 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var fs = require('fs');
var express = require('express');
var app = express();


app.use('/public', express.static(process.cwd() + '/public'));

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

app.get('/', (req, res) => {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

// Respond not found to all the wrong routes



// Error Middleware

//Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Node.js listening on port " + listener.address().port);
});


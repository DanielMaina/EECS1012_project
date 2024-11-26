/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
This is the back end code for a simple distributed web application.
It reponds to API calls from a client.
**/

'use strict'; //in strict mode, scope of variables needs to be well defined 

const express = require('express'); //to run a server application
const port = 8080;  // the port that we are using
const app = express();

// rendering
app.set('view engine', 'ejs')


//route or endpoint
app.get('/', (req, res) => {
  res.send("hi");  
  // rendering
  res.render('index')
});


const gameRouter = require('./')



//listen for requests
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); //server will need to listen ... all the time!!

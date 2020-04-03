// export the express and its functions setting it to a variable
const express = require('express');
// './' is used to identify that routes is a file that its in the same folder instead of a package
const routes = require('./routes');
// security package 
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); //this needs to be below the express call out




// set to run on a specific port on browser you can check with localhost:3333
// Error (cannot Get /) means that you have executed but have not created a root for the app
// ctrl + c ends the execution
app.listen(3333);

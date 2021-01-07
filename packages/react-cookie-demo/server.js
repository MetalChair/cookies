require('@babel/register');

const express = require('express');
const serverMiddleware = require('./src/server');
const cookiesMiddleware = require('universal-cookie-express');

const app = express();

app
  .use('/assets', express.static('dist'))
  .use(cookiesMiddleware())

app.get("/newCookie", (req,res) =>{
  res.cookie("name","hello from the server!")
  res.send({"success":true});
});
app.use(serverMiddleware);

app.listen(8080, function() {
  console.log('Listening on 8080...');
});

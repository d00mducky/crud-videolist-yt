// * THIS IS THE ENTRYPOINT FOR THE SERVER (NODEMON -- see package.json scripts 'start')

const express = require('express')
const app = express()
const port = 3000

// this links our server to the dist folder, which will default to index.html when left like this:
app.use(express.static('dist'));
app.use((req, res, next) => {
  console.log(req.method + ' request incurred at ' + req.path);
  next();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
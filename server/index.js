// * THIS IS THE ENTRYPOINT FOR THE SERVER (NODEMON -- see package.json scripts 'start')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const controllers = require('./controllers');

// this links our server to the dist folder, which will default to index.html when left like this:
app.use(express.static('dist'));
app.use(bodyParser.json());
// allows urlencoded body params
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  console.log(req.method + ' request incurred at ' + req.path);
  next();
});

app.get('/api/queries', controllers.queries.getAll);

app.get ('/api/queries/last', controllers.queries.getLast);

app.get('/api/videos', controllers.videos.getAll);

app.post('/api/videos/:searchQuery', controllers.videos.post);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
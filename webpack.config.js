const path = require('path');

// * NOTE - set up path entry and output variables here to clean things up -- below is an example from hrr50cow-list
// const source_dir = path.join(__dirname, 'client', 'src');
// const output_dir = path.join(__dirname, 'public');


module.exports = {
  // * webpack will bundle the files found at entry -- here in client/src/index.js
  entry: '.client/src/index.js',
  output: {
    // * webpack will output the bundled files (from entry) here -- /dist/main.js
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // * webpack will observe the following filenames / given rules :
};
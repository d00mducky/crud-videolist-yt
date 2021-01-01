const path = require('path');

// * NOTE - set up path entry and output variables here to clean things up -- below is an example from hrr50cow-list
// const source_dir = path.join(__dirname, 'client', 'src');
// const output_dir = path.join(__dirname, 'public');


module.exports = {
  // * webpack will bundle the files found at entry -- here in client/src/index.js

  entry: './client/src/index.js',
  // set up the environment for development
  mode: 'development',

  // * if left blank, webpack would automatically set output to the following:
  output: {
    // * webpack will output the bundled files (from entry) here -- /dist/main.js
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // * webpack will observe the following filenames / given rules :
  module: {
    rules: [{
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  // * this allows us to drop the filename when importing
  // * (e.g. import File from '../path/to/file' instead of '../path/to/file.js(x)') see: https://webpack.js.org/configuration/resolve/
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
var path = require('path');

module.exports = {
  entry: {
    test: './entry'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2'
  },

  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite',
        query: {
          spriteModule: path.resolve(__dirname, 'server-sprite.js')
        }
      }
    ]
  }
};

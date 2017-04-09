const multi = require('../dist/cjs');

module.exports = {
  entry: './test.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: multi('style-loader!css-loader', 'raw-loader'),
      },
    ],
  },
};

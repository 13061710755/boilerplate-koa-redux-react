var webpack = require('webpack');

module.exports = { 
  mode: 'development', 
  entry: [
    './app/src/index.js'
  ],
  // module: {
  //   rules: [{
  //     test: /\.jsx?$/,
  //     exclude: /node_modules/,
  //     user: 'babel-loader'
  //   }]
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },  https://www.webpackjs.com/concepts/
  output: {
    path: __dirname + '/app/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app/build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}; 
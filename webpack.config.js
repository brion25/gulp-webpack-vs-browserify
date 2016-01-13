var path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry:'./app/entry.js',
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.webpack.js'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize:true}),
    new webpack.optimize.DedupePlugin()
  ]
}

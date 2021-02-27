const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
      },
    },
  },
  devtool: 'inline-source-map',
})

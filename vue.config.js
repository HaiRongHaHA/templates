const webpack = import('webpack')
const path = import('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('src/scss/_entry.scss')]
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV),
          APP_ID: JSON.stringify('129')
        }
      }),
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}

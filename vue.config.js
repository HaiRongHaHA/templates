const webpack = require('webpack')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  productionSourceMap: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://example.cn',
        changeOrigin: true,
        secure: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('src/styles/_entry.scss')]
    }
  },
  chainWebpack(config) {
    // 关闭预加载，减少带宽压力
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV),
          APP_ID: JSON.stringify('110')
        }
      })
    ]
  }
}

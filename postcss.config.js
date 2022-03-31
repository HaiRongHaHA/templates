const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = ({ file }) => {
  return {
    plugins: [
      autoprefixer({
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8',
          'last 2 versions'
        ]
      }),
      pxtorem({
        rootValue: 75,
        unitPrecision: 5,
        propList: ['*'],
        exclude: /node_modules/,
        selectorBlackList: [/^html$/, /^.van-/]
      })
    ]
  }
}

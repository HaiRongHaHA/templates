module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null
  }
}

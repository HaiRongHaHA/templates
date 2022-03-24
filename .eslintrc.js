module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    //解决与prettier冲突
    // 'prettier/prettier': 'error',

    // typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off'

    // -----------
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-unused-expressions': 'off',

    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/interface-name-prefixed': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
}

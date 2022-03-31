module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/interface-name-prefixed': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // vue
    'vue/attribute-hyphenation': ['error'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [
          // "/^van-/"
        ]
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ]
  }
}

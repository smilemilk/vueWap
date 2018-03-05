// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    'vue': true,
    'EventVue': true,
    'wx': true
  },
  rules: {
    'one-var': [0, 'always'],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'one-var': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multiple-empty-lines': [0, { max: 2 }],
    'no-new': 'off',
    'no-unneeded-ternary': 0,
    'no-dupe-keys': 0,
    'no-unused-expressions': [0, 'always'],
    'no-useless-escape': 'off',
    'no-undef':  [0, 'always'],
    'new-cap': [0, { newIsCap: true, capIsNew: false }],
    'space-before-function-paren': [0, 'always'],
    semi: [0, 'always']
  }
}

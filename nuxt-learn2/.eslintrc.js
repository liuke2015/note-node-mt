module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'unicorn/escape-case': "off",
    "prettier/prettier": "off",
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    // "no-unused-vars":0,
    "prettier/prettier": [
      "error",
      {
        "endOfLine":"auto",
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true
      }
    ]
  }
}

/*module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
  },
  globals: {}
}*/

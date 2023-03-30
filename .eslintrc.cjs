/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    "no-irregular-whitespace": "off",
    "prettier/prettier": "error",
    "vue/multi-word-component-names": ["error", {
      "ignores": ["index"]
    }]
  },
};

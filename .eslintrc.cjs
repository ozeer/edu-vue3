/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
  // 添加格式化规则
  // rules: {
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       semi: false,
  //       wrapAttributes: false,
  //       printWidth: 100,
  //       endOfLine: 'auto'
  //     }
  //   ]
  // }
}

/**
 * 支持的配置文件
 */
const linterConfigFile = [
  // eslint
  '.eslintrc.js',
  '.eslintrc.cjs',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintignore',

  // stylelint
  '.stylelintrc.js',
  '.stylelintrc.cjs',
  '.stylelintrc.yaml',
  '.stylelintrc.yml',
  '.stylelintrc.json',
  'stylelint.config.js',
  'stylelint.config.cjs',
  '.stylelintignore',

  // husky
  '.huskyrc.js',
  '.huskyrc.yaml',
  '.huskyrc.yml',
  '.huskyrc.json',

  // commitlint
  '.commitlintrc.js',
  '.commitlintrc.cjs',
  '.commitlintrc.yaml',
  '.commitlintrc.yml',
  '.commitlintrc.json',
  'commitlintrc.config.js',
  'commitlintrc.config.cjs',

  // prettier
  '.prettierrc.js',
  '.prettierrc.cjs',
  '.prettierrc.yaml',
  '.prettierrc.yml',
  '.prettierrc.json',
  'prettierrc.config.js',
  'prettierrc.config.cjs',
  '.prettierignore'
]

module.exports = {
  linterConfigFile
}

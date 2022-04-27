module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: 0,
        'eol-last': 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'space-before-function-paren': 0,
        'no-return-assign': 0,
        "prefer-const ": 0,
        'no-useless-return': 0
    }
}
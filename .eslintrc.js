module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    "no-trailing-spaces": 0,
    " no-undef": 0,
    quotes: 0,
    semi: 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    "no-multiple-empty-lines": 0,
  },
};

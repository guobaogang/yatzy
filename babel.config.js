const presets = [
  ['@babel/preset-typescript'],
  ["@babel/preset-react", {
    "runtime": "automatic"
  }]
];

const plugins = [];

module.exports = { presets, plugins };
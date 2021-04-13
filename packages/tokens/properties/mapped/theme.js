const { palette } = require('../color/palette');

function invertSet(set) {
  const newSet = {};

  const keys = Object.keys(set);

  keys.forEach((key, i) => {
    newSet[key] = set[keys[keys.length - 1 - i]];
  });

  return newSet;
}

module.exports = {
  'light': {
    'primary': palette.bleu,
    'secondary': palette.oxford,
    'accent': palette.fire,
    'neutral': palette.neutral,
    'danger': palette.salmon,
    'warning': palette.citrine,
    'positive': palette.lime
  },
  'dark': {
    'primary': invertSet(palette.bleu),
    'secondary': invertSet(palette.oxford),
    'accent': invertSet(palette.fire),
    'neutral': invertSet(palette.neutral),
    'danger': invertSet(palette.salmon),
    'warning': invertSet(palette.citrine),
    'positive': invertSet(palette.lime)
  }
};

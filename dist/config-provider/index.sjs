/* eslint-disable */
var object = require("../wxs/object.sjs");

var style = require("../wxs/style.sjs");

function kebabCase(word) {
  var newWord = word.replace(getRegExp("[A-Z]", 'g'), function (i) {
    return '-' + i;
  }).toLowerCase().replace(getRegExp("^-"), '');
  return newWord;
}

function mapThemeVarsToCSSVars(themeVars) {
  var cssVars = {};
  object.keys(themeVars).forEach(function (key) {
    var cssVarsKey = '--' + kebabCase(key);
    cssVars[cssVarsKey] = themeVars[key];
  });
  return style(cssVars);
}

module.exports = {
  kebabCase: kebabCase,
  mapThemeVarsToCSSVars: mapThemeVarsToCSSVars
};
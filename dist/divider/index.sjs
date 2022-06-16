/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function rootStyle(data) {
  return style([{
    'border-color': data.borderColor,
    color: data.textColor,
    'font-size': addUnit(data.fontSize)
  }, data.customStyle]);
}

module.exports = {
  rootStyle: rootStyle
};
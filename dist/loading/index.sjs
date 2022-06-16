/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function spinnerStyle(data) {
  return style({
    color: data.color,
    width: addUnit(data.size),
    height: addUnit(data.size)
  });
}

function textStyle(data) {
  return style({
    'font-size': addUnit(data.textSize)
  });
}

module.exports = {
  spinnerStyle: spinnerStyle,
  textStyle: textStyle
};
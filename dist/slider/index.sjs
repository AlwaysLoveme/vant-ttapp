/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function barStyle(barHeight, activeColor) {
  return style({
    height: addUnit(barHeight),
    background: activeColor
  });
}

module.exports = {
  barStyle: barStyle
};
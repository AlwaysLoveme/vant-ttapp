/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function titleStyle(data) {
  return style([{
    'max-width': addUnit(data.titleWidth),
    'min-width': addUnit(data.titleWidth)
  }, data.titleStyle]);
}

module.exports = {
  titleStyle: titleStyle
};
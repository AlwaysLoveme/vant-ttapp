/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function rootStyle(data) {
  if (!data.gutter) {
    return '';
  }

  return style({
    'margin-right': addUnit(-data.gutter / 2),
    'margin-left': addUnit(-data.gutter / 2)
  });
}

module.exports = {
  rootStyle: rootStyle
};
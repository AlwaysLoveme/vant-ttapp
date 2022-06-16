/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function rootStyle(data) {
  return style({
    'padding-left': addUnit(data.gutter)
  });
}

module.exports = {
  rootStyle: rootStyle
};
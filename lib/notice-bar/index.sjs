/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function rootStyle(data) {
  return style({
    color: data.color,
    'background-color': data.backgroundColor,
    background: data.background
  });
}

module.exports = {
  rootStyle: rootStyle
};
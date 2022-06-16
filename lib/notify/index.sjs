/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function rootStyle(data) {
  return style({
    'z-index': data.zIndex,
    top: addUnit(data.top)
  });
}

function notifyStyle(data) {
  return style({
    background: data.background,
    color: data.color
  });
}

module.exports = {
  rootStyle: rootStyle,
  notifyStyle: notifyStyle
};
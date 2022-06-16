/* eslint-disable */
var style = require("../wxs/style.sjs");

function rootStyle(data) {
  return style({
    'background-color': data.plain ? '' : data.color,
    color: data.textColor || data.plain ? data.textColor || data.color : ''
  });
}

module.exports = {
  rootStyle: rootStyle
};
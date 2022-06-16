/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function inputStyle(autosize) {
  if (autosize && autosize.constructor === 'Object') {
    return style({
      'min-height': addUnit(autosize.minHeight),
      'max-height': addUnit(autosize.maxHeight)
    });
  }

  return '';
}

module.exports = {
  inputStyle: inputStyle
};
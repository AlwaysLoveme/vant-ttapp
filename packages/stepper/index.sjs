/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function buttonStyle(data) {
  return style({
    width: addUnit(data.buttonSize),
    height: addUnit(data.buttonSize)
  });
}

function inputStyle(data) {
  return style({
    width: addUnit(data.inputWidth),
    height: addUnit(data.buttonSize)
  });
}

module.exports = {
  buttonStyle: buttonStyle,
  inputStyle: inputStyle
};
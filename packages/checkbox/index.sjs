/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function iconStyle(checkedColor, value, disabled, parentDisabled, iconSize) {
  var styles = {
    'font-size': addUnit(iconSize)
  };

  if (checkedColor && value && !disabled && !parentDisabled) {
    styles['border-color'] = checkedColor;
    styles['background-color'] = checkedColor;
  }

  return style(styles);
}

module.exports = {
  iconStyle: iconStyle
};
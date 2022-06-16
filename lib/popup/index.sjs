/* eslint-disable */
var style = require("../wxs/style.sjs");

function popupStyle(data) {
  return style([{
    'z-index': data.zIndex,
    '-webkit-transition-duration': data.currentDuration + 'ms',
    'transition-duration': data.currentDuration + 'ms'
  }, data.display ? null : 'display: none', data.customStyle]);
}

module.exports = {
  popupStyle: popupStyle
};
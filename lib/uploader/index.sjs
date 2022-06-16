/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function sizeStyle(data) {
  return "Array" === data.previewSize.constructor ? style({
    width: addUnit(data.previewSize[0]),
    height: addUnit(data.previewSize[1])
  }) : style({
    width: addUnit(data.previewSize),
    height: addUnit(data.previewSize)
  });
}

module.exports = {
  sizeStyle: sizeStyle
};
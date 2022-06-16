/* eslint-disable */
var style = require("../wxs/style.sjs");

var addUnit = require("../wxs/add-unit.sjs");

function isImage(name) {
  return name.indexOf('/') !== -1;
}

function rootClass(data) {
  var classes = ['custom-class'];

  if (data.classPrefix != null) {
    classes.push(data.classPrefix);
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image');
  } else if (data.classPrefix != null) {
    classes.push(data.classPrefix + '-' + data.name);
  }

  return classes.join(' ');
}

function rootStyle(data) {
  return style([{
    color: data.color,
    'font-size': addUnit(data.size)
  }, data.customStyle]);
}

module.exports = {
  isImage: isImage,
  rootClass: rootClass,
  rootStyle: rootStyle
};
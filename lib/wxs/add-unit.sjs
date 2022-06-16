/* eslint-disable */
var REGEXP = getRegExp(/^[0-9]+.?[0-9]*$/);

function addUnit(value) {
  if (value == null) {
    return undefined;
  }

  return REGEXP.test('' + value) ? value + 'px' : value;
}

module.exports = addUnit;
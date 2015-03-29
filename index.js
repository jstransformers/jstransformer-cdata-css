'use strict';

var re = /\]\]>/g;

exports.name = 'cdata-css';
exports.outputFormat = 'html';

exports.render = function (str, options) {
  var escaped = str.replace(re, "]]]]><![CDATA[>");
  return '/*<![CDATA[*/\n' + escaped + '\n/*]]>*/';
}

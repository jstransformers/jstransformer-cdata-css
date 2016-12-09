'use strict'

<<<<<<< HEAD
var re = /\]\]>/g;

exports.name = 'cdata-css';
exports.outputFormat = 'html';

exports.render = function (str, options) {
  var escaped = str.replace(re, "]]]]><![CDATA[>");
  return '/*<![CDATA[*/\n' + escaped + '\n/*]]>*/';
=======
exports.name = 'foo'
exports.inputFormats = ['foo', 'foobar']
exports.outputFormat = 'html'

exports.render = function (str) {
  return str
>>>>>>> Add xo as coding style (#37)
}

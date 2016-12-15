'use strict'

var re = /]]>/g

exports.name = 'cdata-css'
exports.inputFormats = ['css']
exports.outputFormat = 'html'

exports.render = function (str) {
  var escaped = str.replace(re, ']]]]><![CDATA[>')
  return '/*<![CDATA[*/\n' + escaped + '\n/*]]>*/'
}

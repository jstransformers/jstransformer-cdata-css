# jstransformer-cdata-css

Transformer that converts a CSS string to XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cdata-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cdata-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cdata-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-cdata-css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-cdata-css.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata-css.svg)](https://www.npmjs.org/package/jstransformer-cdata-css)

## Installation

    npm install jstransformer-cdata-css

## API

```js
var cdata = require('jstransformer')(require('jstransformer-cdata-css'))

var css = 'p::before { content: "hello world"; }'
console.log(cdata.render(css).body)
// Prints:
// /*<![CDATA[*/
// p::before { content: "hello world"; }
// /*]]>*/

// ']]>' is properly escaped:
css = 'p::before { content: "<[[goodbye world]]>" }'
console.log(cdata.render(css).body)
// Prints:
// /*<![CDATA[*/
// p::before { content: "<[[goodbye world]]]]><![CDATA[>" }
// /*]]>*/
```

## License

MIT

# jstransformer-cdata-css

Transformer that converts a CSS string to XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-css)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-cdata-css/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-cdata-css?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata-css.svg)](https://www.npmjs.org/package/jstransformer-cdata-css)
=======
1. Visit [the Boilerplate Wiki](https://github.com/jstransformers/boilerplate/wiki) on how to get started
2. Remove this top notice from any transformers

# jstransformer-cdata-css

[cdata-css](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cdata-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cdata-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cdata-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-cdata-css)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata-css.svg)](https://www.npmjs.org/package/jstransformer-cdata-css)
>>>>>>> Use Codecov instead of Coveralls

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

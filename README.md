# babel-plugin-transform-globalthis

[![Build Status][ci-img]][ci]

Babel plugin for transforming
[`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis).

## Install

```sh
npm install babel-plugin-transform-globalthis --save-dev
```

## Usage

Use it via available [plugin activation options][babel-plugins].

For `.babelrc` file:

```json
{
	"plugins": ["babel-plugin-transform-globalthis"]
}
```

Then, in your code:

```js
/* Before */

globalThis.becky;

/* After */

// Ommited for simplicity - here goes `globalThis` ponyfill
var _globalThis = {};

_globalThis.becky;
```

Check test fixtures ([actual](test/fixtures/all.js) and
[expected](test/fixtures/all.expected.js)) for more examples.

## Acknowledgments

-   [A horrifying `globalThis` polyfill in universal JavaScript](https://mathiasbynens.be/notes/globalthis)
    by [@mathias](https://twitter.com/mathias)
-   [`@ungap/global-this`](https://github.com/ungap/global-this) by
    [@WebReflection](https://twitter.com/WebReflection)

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/babel-plugin-transform-globalthis
[ci-img]: https://travis-ci.com/niksy/babel-plugin-transform-globalthis.svg?branch=master

<!-- prettier-ignore-end -->

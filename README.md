# @rxluz/js-enum [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=An%20ENUM%20implementation%20in%20JS&url=https://github.com/rxluz/js-enum)

> An ENUM implementation in JS

[![Build Status](https://travis-ci.com/rxluz/js-enum.svg?branch=master)](https://travis-ci.com/rxluz/js-enum)
[![codecov](https://codecov.io/gh/rxluz/js-enum/branch/master/graph/badge.svg)](https://codecov.io/gh/rxluz/js-enum)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![](https://img.shields.io/bundlephobia/min/@rxluz/js-enum.svg?style=flat)
![](https://img.shields.io/npm/v/@rxluz/js-enum.svg?style=flat)
![](https://img.shields.io/npm/l/@rxluz/js-enum.svg?style=flat)

## Usage

### Example (es module)

```js
import jsENUM from '@rxluz/js-enum';

const direction = jsENUM('UP', 'DOWN', 'LEFT', 'RIGHT');

const myDirection = direction.DOWN;
```

### Example (commonjs)

```js
var jsENUM = require('@rxluz/js-enum').default;

const direction = jsENUM('UP', 'DOWN', 'LEFT', 'RIGHT');

const myDirection = direction.DOWN;
```

### Using custom values

The default value to each element of your enum will be a sequential number (eg. UP: 0, DOWN: 1, LEFT: 2, RIGHT, 3), but you could change this putting a custom value to each element

```js
const direction = jsENUM(['UP', 'UP'], 'DOWN', 'LEFT', 'RIGHT');

const myDirection = direction.DOWN;
```

In the example above the values will be (eg. UP: UP, DOWN: 1, LEFT: 2, RIGHT, 3)

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm i @rxluz/js-enum --save
```

## Acknowledgments

- This project was inspired by a chat in NodeJS Brasil Telegram Group.
- [rxluz](https://github.com/rxluz)

## See Also

- [Project documentation](https://rxluz.github.io/js-enum/)

## License

MIT

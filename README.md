# syllable-parser

[![NPM version](https://img.shields.io/npm/v/syllable-parser.svg)](https://www.npmjs.com/package/syllable-parser)

It is a Javascript library that parses Turkish words to syllables.

## Installation

```
npm install --save syllable-parser
```

## Usage

```js
const SyllableParser = require("syllable-parser");
const syllableParser = new SyllableParser("TR");
console.log(syllableParser.parse("selam"));
// Output: ["se","lam"]
```

You can extract number of syllables.

```js
const SyllableParser = require("syllable-parser");
const syllableParser = new SyllableParser("TR");
console.log(syllableParser.getSyllableCount("selam"));
// Output: 2
```

## Author

**Ender CAN**

- <https://github.com/endrcn>
- <https://twitter.com/endrcn>

## License

Open sourced under the [Apache-2.0 LICENSE](LICENSE).

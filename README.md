Darkcore
========

A pure and powerful JavaScript Darkcoin library.

## Principles

Darkcoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Darkcoin network allows for highly resilient darkcoin infrastructure, and the developer community needs reliable, open-source tools to implement darkcoin apps and services.

## Get Started

```
npm install darkcore
```

Using it in Node.js:

```javascript
var darkcore = require('darkcore');

assert(darkcore.Address.isValid('Xu8NczUdgqPbQi6t4hRKEQ4VY7D99v7Afx'));
var simpleTx = new darkcore.Transaction();
var simpleTx.from(unspent).to(address, amount);
simpleTx.sign(privateKey);
```

## Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

[Read the Developer Guide](http://bitcore.io/guide/)

[Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](http://bitpaylabs.com/c/bitcore).

## Security

Bitpay is using Bitcore in production, as are [many others](http://bitcore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle

To build darkcore full bundle for the browser:

```sh
gulp browser
```

This will generate files named `browser/bitcore.js` and `browser/bitcore.min.js`.

## Tests

Run all the tests:

```sh
gulp test
```

Run the NodeJS tests with mocha:

```sh
gulp test:node
```

Run the browser tests with karma:

```sh
gulp test:browser
```

Create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it):

```sh
gulp coverage
```

## License

Code released under [the MIT license](https://github.com/vertoe/darkcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

Copyright 2015 Darkcoin Developers, Darkcore is no trademark at all ;-)

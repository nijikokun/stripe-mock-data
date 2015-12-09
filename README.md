# Stripe Mock Data

Stripe webhook & resource object data for mocking / testing purposes.

## Install

```bash
$ npm install stripe-mock-data --save-dev
```

## Features

- Quick access to entire dataset via `.collection`
- Quick select of a specific version using constructor.

## Versioning

**Resource Object Builders**

- [`2014-11-05`](data/resources/2014-11-05)

**Webhook Data**

- [`2012-02-23`](data/webhooks/2012-02-23)
- [`2013-02-13`](data/webhooks/2013-02-13)
- [`2013-07-05`](data/webhooks/2013-07-05)
- [`2013-08-13`](data/webhooks/2013-08-13)
- [`2014-10-07`](data/webhooks/2014-10-07)
- [`2014-11-05`](data/webhooks/2014-11-05)
- [`2015-04-07`](data/webhooks/2015-04-07)
- [`2015-10-01`](data/webhooks/2015-10-01)

Don't see your version? [Open an issue](https://github.com/Nijikokun/stripe-mock-data/issues/new), or start a pull request by forking.

## Usage

Basic usage:

```js
var StripeMockData = require('stripe-mock-data')
console.log(StripeMockData.collection)
```

Access Specific Version:

```js
var StripeMockData = require('stripe-mock-data')
var StripeVersion = '2015-10-01'

// Access Version
var StripeData = StripeMockData(StripeVersion)

// View data
console.log(StripeData)
```

When attempting to access a version that doesn't exist, an error is thrown:

```js
try {
  StripeData = StripeMockData('Invalid')
} catch (e) {
  console.log(e.message, e.stack)
}
```

## Todo

- Write tests (entry file, resource objects)
- Clean up older webhook objects of invalid identifiers
- Core for webhooks / resources, extend off core objects.

## License

MIT © [Nijiko Yonskai](http://nijikokun.com)
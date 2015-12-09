var assign = require('assign-deep')

module.exports = function mockAccount (params) {
  params = params || {}
  params.id = params.id || "acct_00000000000000"

  return assign({
    "id": params.id,
    "email": params.id + "@example.com",
    "statement_descriptor": "TEST",
    "display_name": null,
    "timezone": "Etc/UTC",
    "details_submitted": true,
    "charges_enabled": false,
    "transfers_enabled": false,
    "currencies_supported": [
      "usd"
    ],
    "default_currency": "usd",
    "country": "US",
    "object": "account",
    "business_name": null
  }, params)
}
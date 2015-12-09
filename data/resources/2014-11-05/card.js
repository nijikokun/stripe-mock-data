var assign = require('assign-deep')

module.exports = function mockCard (params) {
  params = params || {}
  var id = params.id || "card_00000000000000"

  return assign({
    "id": id,
    "fingerprint": "oSoDdtNFuZmLRZIO",
    "object": "card",
    "address_city": null,
    "address_country": null,
    "address_line1": null,
    "address_line1_check": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null,
    "address_zip_check": null,
    "brand": "Visa",
    "country": "US",
    "cvc_check": null,
    "dynamic_last4": null,
    "exp_month": 12,
    "exp_year": 2017,
    "funding": "credit",
    "last4": "4242",
    "metadata": {},
    "name": "John Doe",
    "tokenization_method": null
  }, params)
}
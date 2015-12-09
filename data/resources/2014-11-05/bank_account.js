var assign = require('assign-deep')

module.exports = function mockBankAccount (params) {
  params = params || {}
  params.id = params.id || "ba_00000000000000"

  return assign({
    "id": params.id,
    "object": "bank_account",
    "account": "acct_00000000000000",
    "bank_name": "STRIPE TEST BANK",
    "country": "US",
    "currency": "usd",
    "default_for_currency": false,
    "fingerprint": "oSoDdtNFuZmLRZIO",
    "last4": "6789",
    "metadata": {},
    "name": null,
    "routing_number": "110000000",
    "status": "new"
  }, params)
}
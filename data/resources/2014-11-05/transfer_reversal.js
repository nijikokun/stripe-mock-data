var assign = require('assign-deep')

module.exports = function mockTransferReversal (params) {
  params = params || {}
  params.id = params.id || "trr_00000000000000"

  return assign({
    "id": params.id,
    "object": "transfer_reversal",
    "amount": 48400,
    "balance_transaction": null,
    "created": Date.now(),
    "currency": "usd",
    "metadata": {},
    "transfer": "tr_17E1xtCye6gfud3ok1KwT1cH"
  }, params)
}
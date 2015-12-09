var assign = require('assign-deep')

module.exports = function mockCharge (params) {
  params = params || {}
  params.id = params.id || "re_00000000000000"

  return assign({
    "id": params.id,
    "object": "refund",
    "amount": 0,
    "balance_transaction": "txn_00000000000000",
    "charge": "ch_00000000000000",
    "created": Date.now(),
    "currency": "usd",
    "reason": null,
    "receipt_number": null,
    "metadata": {}
  }, params)
}
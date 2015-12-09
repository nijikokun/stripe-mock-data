var assign = require('assign-deep')
var card = require('./card')

module.exports = function mockCharge (params) {
  params = params || {}
  params.id = params.id || "ch_00000000000000"

  return assign({
    "id": params.id,
    "object": "charge",
    "created": Date.now(),
    "livemode": false,
    "paid": true,
    "amount": 0,
    "currency": "usd",
    "refunded": false,
    "captured": true,
    "balance_transaction": "txn_00000000000000",
    "failure_message": null,
    "failure_code": null,
    "amount_refunded": 0,
    "customer": null,
    "invoice": null,
    "description": null,
    "dispute": null,
    "metadata": {},
    "statement_description": null,
    "receipt_email": null,
    "receipt_number": null,
    "shipping": null,
    "card": card(),
    "refunds": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/charges/" + params.id + "/refunds",
      "data": []
    },
    "fraud_details": {
      "stripe_report": null,
      "user_report": null
    }
  }, params)
}
var utils = require('../utils')
var assign = require('assign-deep')
var bankAccount = require('./bank_account')

module.exports = function mockTransfer (params) {
  params = params || {}
  params.id = params.id || "tr_00000000000000"
  params.reversals = params.reversals || {}
  params.reversals.total_count = params.reversals.data.length

  if (params.destination) {
    params.bank_account = params.bank_account || {}
    params.bank_account.id = params.destination
  }

  if (params.bank_account && params.bank_account.id) {
    params.destination = params.bank_account.id
  }

  return assign({
    "id": params.id,
    "object": "transfer",
    "amount": 48400,
    "amount_reversed": 0,
    "application_fee": null,
    "balance_transaction": "txn_17EtLoCye6gfud3o9belOGYW",
    "bank_account": bankAccount(),
    "created": Date.now(),
    "currency": "usd",
    "date": 1449187200,
    "description": "STRIPE TRANSFER",
    "destination": "ba_00000000000000",
    "failure_code": null,
    "failure_message": null,
    "livemode": false,
    "metadata": {},
    "recipient": null,
    "reversals": {
      "object": "list",
      "data": [],
      "has_more": false,
      "total_count": 0,
      "url": "/v1/transfers/" + params.id + "/reversals"
    },
    "reversed": false,
    "source_transaction": null,
    "statement_descriptor": null,
    "status": "paid",
    "type": "bank_account"
  }, params)
}
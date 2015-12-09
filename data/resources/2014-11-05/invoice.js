var utils = require('../utils')
var assign = require('assign-deep')
var invoiceLineItem = require('./invoice_line_item')

module.exports = function mockInvoice (params) {
  params = params || {}
  params.id = params.id || "in_00000000000000"
  params.lines = params.lines ? params.lines : {}
  params.lines.data = params.lines.data ? params.lines.data : [invoiceLineItem()]
  params.total = utils.reduce(params.lines.data, 'amount')

  return assign({
    "id": params.id,
    "object": "invoice",
    "application_fee": null,
    "attempt_count": 0,
    "attempted": false,
    "charge": null,
    "closed": false,
    "currency": "usd",
    "customer": "cus_00000000000000",
    "date": Date.now(),
    "description": null,
    "discount": null,
    "ending_balance": 0,
    "forgiven": false,
    "lines": {
      "data": params.lines.data,
      "total_count": params.lines.data.length,
      "object": "list",
      "url": "/v1/invoices/" + params.id + "/lines"
    },
    "livemode": false,
    "metadata": {},
    "next_payment_attempt": null,
    "paid": false,
    "period_end": Date.now() + 1,
    "period_start": Date.now(),
    "receipt_number": null,
    "starting_balance": 0,
    "statement_descriptor": null,
    "tax": null,
    "tax_percent": null,
    "amount_due": params.total,
    "subtotal": params.total,
    "total": params.total,
    "webhooks_delivered_at": Date.now()
  }, params)
}
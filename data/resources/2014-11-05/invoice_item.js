var assign = require('assign-deep')
var plan = require('./plan')

module.exports = function mockInvoiceItem (params) {
  params = params || {}
  params.id = params.id || "ii_00000000000000"

  return assign({
    "id": params.id,
    "object": "invoiceitem",
    "amount": 0,
    "currency": "usd",
    "customer": "cus_00000000000000",
    "date": Date.now(),
    "description": "Mock description",
    "discountable": false,
    "invoice": "in_00000000000000",
    "livemode": false,
    "metadata": {},
    "period": {
      "start": Date.now(),
      "end": Date.now() + 1
    },
    "plan": plan(),
    "proration": true,
    "quantity": 1,
    "subscription": "sub_00000000000000"
  }, params)
}
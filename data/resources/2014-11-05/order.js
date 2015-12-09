var utils = require('../utils')
var assign = require('assign-deep')
var orderItem = require('./order_item')

module.exports = function mockOrder (params) {
  params = params || {}
  params.id = params.id || "or_00000000000000"
  params.items = params.items || [orderItem()]
  params.amount = utils.reduce(params.items, 'amount')

  return assign({
    "id": params.id,
    "object": "order",
    "amount": params.amount,
    "application": null,
    "application_fee": null,
    "charge": null,
    "created": Date.now(),
    "currency": "usd",
    "customer": null,
    "email": null,
    "items": params.items,
    "livemode": false,
    "metadata": {},
    "selected_shipping_method": null,
    "shipping": {
      "address": {
        "city": "Anytown",
        "country": "US",
        "line1": "1234 Main street",
        "line2": null,
        "postal_code": "123456",
        "state": null
      },
      "name": "Jane Doe",
      "phone": null
    },
    "shipping_methods": null,
    "status": "created",
    "updated": Date.now()
  }, params)
}
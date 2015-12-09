var assign = require('assign-deep')

module.exports = function mockOrderItem (params) {
  params = params || {}
  params.parent = params.parent || "sk_00000000000000"

  return assign({
    "object": "order_item",
    "amount": 1500,
    "currency": "usd",
    "description": "T-shirt",
    "parent": params.parent,
    "quantity": null,
    "type": "sku"
  }, params)
}
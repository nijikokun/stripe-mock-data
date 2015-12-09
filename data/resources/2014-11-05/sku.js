var utils = require('../utils')
var assign = require('assign-deep')

module.exports = function mockSKU (params) {
  params = params || {}
  params.id = params.id || "sku_00000000000000"

  return assign({
    "id": "sku_00000000000000",
    "object": "sku",
    "active": true,
    "attributes": {},
    "created": Date.now(),
    "currency": "usd",
    "image": null,
    "inventory": {
      "quantity": 50,
      "type": "finite",
      "value": null
    },
    "livemode": false,
    "metadata": {},
    "package_dimensions": null,
    "price": 1500,
    "product": "prod_00000000000000",
    "updated": Date.now()
  }, params)
}
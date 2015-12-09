var utils = require('../utils')
var assign = require('assign-deep')

module.exports = function mockProduct (params) {
  params = params || {}
  params.id = params.id || "prod_00000000000000"
  params.skus = params.skus || {}
  params.skus.total_count = params.skus.data.length

  return assign({
    "id": params.id,
    "object": "product",
    "active": true,
    "attributes": [],
    "caption": null,
    "created": Date.now(),
    "description": "Comfortable gray cotton t-shirts",
    "images": [],
    "livemode": false,
    "metadata": {},
    "name": "T-shirt",
    "package_dimensions": null,
    "shippable": true,
    "skus": {
      "object": "list",
      "data": [],
      "has_more": false,
      "total_count": 0,
      "url": "/v1/skus?product=" + params.id + "&active=true"
    },
    "updated": Date.now(),
    "url": null
  }, params)
}
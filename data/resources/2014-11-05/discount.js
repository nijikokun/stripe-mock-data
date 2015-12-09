var assign = require('assign-deep')
var coupon = require('./coupon')

module.exports = function mockDiscount (params) {
  params = params || {}

  return assign({
    "object": "discount",
    "coupon": coupon(),
    "customer": "cus_00000000000000",
    "end": null,
    "start": Date.now(),
    "subscription": "sub_00000000000000"
  }, params)
}
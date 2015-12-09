var assign = require('assign-deep')

module.exports = function mockCoupon (params) {
  params = params || {}
  params.id = params.id || "TESTING"

  return assign({
    "id": params.id,
    "object": "coupon",
    "amount_off": 4000,
    "created": Date.now(),
    "currency": "usd",
    "duration": "forever",
    "duration_in_months": null,
    "livemode": false,
    "max_redemptions": null,
    "metadata": {},
    "percent_off": null,
    "redeem_by": null,
    "times_redeemed": 0,
    "valid": true
  }, params)
}
var assign = require('assign-deep')
var plan = require('./plan')

module.exports = function mockSubscription (params) {
  params = params || {}
  params.id = params.id || "sub_00000000000000"

  return assign({
    "id": params.id,
    "object": "subscription",
    "application_fee_percent": null,
    "cancel_at_period_end": false,
    "canceled_at": null,
    "current_period_end": Date.now() + 1,
    "current_period_start": Date.now(),
    "customer": "cus_00000000000000",
    "discount": null,
    "ended_at": null,
    "metadata": {},
    "plan": plan(),
    "quantity": 1,
    "start": Date.now(),
    "status": "active",
    "tax_percent": null,
    "trial_end": null,
    "trial_start": null
  }, params)
}
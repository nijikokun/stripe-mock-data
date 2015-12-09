var assign = require('assign-deep')

module.exports = function mockPlan (params) {
  params = params || {}
  params.id = params.id || "pl_00000000000000"

  return assign({
    "id": params.id,
    "object": "plan",
    "amount": 0,
    "created": Date.now(),
    "currency": "usd",
    "interval": "month",
    "interval_count": 1,
    "livemode": false,
    "metadata": {},
    "name": "Testing",
    "statement_descriptor": "Testing plan for Stripe mock data",
    "trial_period_days": null
  }, params)
}
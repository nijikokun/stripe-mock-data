var assign = require('assign-deep')

module.exports = function mockCustomer (params) {
  params = params || {}
  params.id = params.id || "cus_00000000000000"
  params.cards = params.cards || {}
  params.cards.total_count = params.cards.data.length
  params.subscriptions = params.subscriptions || {}
  params.subscriptions.total_count = params.subscriptions.data.length

  return assign({
    "object": "customer",
    "created": Date.now(),
    "id": params.id,
    "livemode": false,
    "description": 'Auto-generated Stripe customer mock data',
    "email": params.id + "@example.com",
    "delinquent": false,
    "discount": null,
    "account_balance": 0,
    "currency": "usd",
    "default_card": null,
    "metadata": {},
    "subscriptions": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/customers/" + params.id + "/subscriptions",
      "data": []
    },
    "cards": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/customers/" + params.id + "/cards",
      "data": []
    }
  }, params)
}
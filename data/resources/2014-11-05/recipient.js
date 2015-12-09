var utils = require('../utils')
var assign = require('assign-deep')

/**
 * @deprecated
 */
module.exports = function mockRecipient (params) {
  params = params || {}
  params.id = params.id || "rp_00000000000000"
  params.cards = params.cards || {}
  params.cards.total_count = params.cards.data.length

  return assign({
    "id": params.id,
    "object": "recipient",
    "active_account": null,
    "cards": {
      "object": "list",
      "data": [],
      "has_more": false,
      "total_count": 0,
      "url": "/v1/recipients/" + params.id + "/cards"
    },
    "created": Date.now(),
    "default_card": null,
    "description": "Recipient for John Doe",
    "email": "test@example.com",
    "livemode": false,
    "metadata": {},
    "migrated_to": null,
    "name": "John Doe",
    "type": "individual",
    "verified": false
  }, params)
}
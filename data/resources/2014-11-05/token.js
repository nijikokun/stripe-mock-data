var assign = require('assign-deep')

module.exports = function mockToken (params) {
  params = params || {}
  params.id = params.id || "tok_00000000000000"

  return assign({
    "id": params.id,
    "object": "token",
    "client_ip": null,
    "created": Date.now(),
    "livemode": false,
    "type": "card",
    "used": false
  }, params)
}
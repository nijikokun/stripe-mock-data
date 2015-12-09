var assign = require('assign-deep')
var token = require('./token')
var card = require('./card')

module.exports = function mockCardToken (params) {
  params = params || {}
  return assign(token({ type: "card" }), { "card": card() }, params)
}
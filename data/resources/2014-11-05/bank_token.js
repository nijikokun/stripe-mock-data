var bankAccount = require('./bank_account')
var assign = require('assign-deep')
var token = require('./token')

module.exports = function mockBankToken (params) {
  params = params || {}
  return assign(token({ type: "bank_account" }), { "bank_account": bankAccount() }, params)
}
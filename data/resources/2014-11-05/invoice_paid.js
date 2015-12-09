var assign = require('assign-deep')
var invoice = require('./invoice')

module.exports = function mockPaidInvoice (params) {
  params = params || {}
  params.attempt_count = params.attempt_count || 1
  params.attempted = true
  params.closed = true
  params.paid = true
  params.charge = params.charge || 'ch_00000000000000'
  params.ending_balance = params.ending_balance || 0
  params.next_payment_attempt = params.next_payment_attempt || null

  return invoice(params)
}
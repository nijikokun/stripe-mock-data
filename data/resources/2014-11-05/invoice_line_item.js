var assign = require('assign-deep')
var item = require('./invoice_item')

module.exports = function mockInvoiceLineItem (params) {
  params = params || {}
  params.id = params.id || "ii_00000000000000"

  return assign(item({
    "object": "line_item",
    "type": "invoiceitem"
  }), params)
}
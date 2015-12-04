module.exports = exports = function StripeMockData (version) {
  if (!StripeMockData.collection.webhooks[version]) {
    throw new Error('StripeMockData: Invalid Stripe API version: ' + version)
  }

  return {
    version: version,
    webhooks: StripeMockData.collection.webhooks[version]
  }
}

exports.collection = require('./data')
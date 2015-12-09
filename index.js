module.exports = exports = function StripeMockData (version) {
  if (!StripeMockData.collection.webhooks[version]) {
    throw new Error('StripeMockData: Invalid Stripe API version: ' + version)
  }

  if (!StripeMockData.collection.resources[version]) {
    console.warn('StripeMockData: warn: Resource creation for version [' + version + '] does not exist yet.')
    console.info('StripeMockData: info: Webhooks will still work as normal.')
    console.info('StripeMockData: info: Consider contributing data by forking: https://github.com/Nijikokun/stripe-mock-data');
  }

  return {
    version: version,
    resources: StripeMockData.collection.resources[version],
    webhooks: StripeMockData.collection.webhooks[version]
  }
}

exports.collection = require('./data')
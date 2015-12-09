var versions = [
  '2014-11-05',
]

versions.forEach(function (version) {
  exports[version] = require('./' + version)
})
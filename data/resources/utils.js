exports.reduce = function (array, property) {
  return array.map(function (item) {
    return item[property]
  }).reduce(function (a, b) {
    return a + b
  }, 0)
}
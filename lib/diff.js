'use strict'

var type = require('json8/lib/type')
var equal = require('json8/lib/equal')
var OBJECT = 'object'

module.exports = function diff(a, b) {
  var t = type(a)
  if (t !== OBJECT || t !== type(b))
    return b

  var patch = {}

  var keys, i, l, k

  keys = Object.keys(b)
  for (i = 0, l = keys.length; i < l; i++) {
    k = keys[i]
    // added properties
    if (!a.hasOwnProperty(k)) {
      patch[k] = b[k]
    }
    // replaced properties
    else if (!equal(a, b)) {
      patch[k] = b[k]
    }
  }

  // removed properties
  keys = Object.keys(a)
  for (i = 0, l = keys.length; i < l; i++) {
    k = keys[i]
    if (!b.hasOwnProperty(k))
      patch[k] = null
  }

  return patch
}

var diff = module.exports

console.log(diff({foo: 'bar', bar: 'foo'}, {foo: 'bar', bar: 'foo'}))
console.log(diff({foo: 'bar', bar: 'foo'}, {bar: 'foo'}))
console.log(diff({foo: 'bar', bar: 'foo'}, {foo: 'foo', bar: 'bar'}))

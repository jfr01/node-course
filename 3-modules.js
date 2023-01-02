// Modules
// commonJs, every file in Node is a Module

const names = require('./4-nameModule')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi('Fernando')
sayHi(names.john)
sayHi(names.peter)


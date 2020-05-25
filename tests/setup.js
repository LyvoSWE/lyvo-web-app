global.chai = require('chai')
global.sinon = require('sinon')
const sinonChai = require('sinon-chai')

global.expect = global.chai.expect

global.chai.use(sinonChai)

global.requestAnimationFrame = cb => cb()

const util = require('./index')
const fn1 = ()=>{console.log('1')}
util.on('click', fn1)
util.emit('click')
//

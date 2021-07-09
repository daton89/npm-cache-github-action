const _ = require('lodash')

function sum (list) {
    const total = _.sum(list)

    return total
}


module.exports = { sum }


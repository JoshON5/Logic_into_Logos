const fs = require('fs')

function createDocument (svg) {
    fs.writeFile("./examples/logo.svg", svg, (err, data) => {
        err ? console.error((err)) : console.log("file written")
    }) 
}

module.exports = { createDocument }
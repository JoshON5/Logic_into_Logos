const ShapeRender = require('./shapeRender')

function createDocument (shape) {
    const shape = new ShapeRender;
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${renderData(data.shape)}
    </svg>`
}

module.exports = { createDocument }
const { createDocument } = require('./document')
const colorChoices = require('./colorChoices')
const { Triangle, Square, Circle, SVG } = require('./shapes')
const inquirer = require('inquirer')
const fs = require('fs')

class CLI {
    constructor () {
    }
    async run() {
        const shapeChoices = ['Triangle', 'Circle', 'Square']
        const questions = [     
        {
            type: 'input',
            name: 'text',
            message: 'Enter in 3 letters you want inside the logo:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape of the SVG you would like:',
            choices: shapeChoices            
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter in the color value you would like (for hex colors start with #):'
        },]
        const data = await inquirer.prompt(questions)
        const hexColors = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
        const colors = colorChoices
        let colorsCheck = colors.includes(data.color.toLowerCase())
        let shape;

        
        if  (data.text.length > 3 || data.text.length === 0) {
            console.error('Please enter text length of 3 characters.')
        }
        if (!hexColors.test(data.color) && !colors === colorsCheck) {
            throw new Error('please enter in a valid hex color or color input.(refer to colorChoices.js file for valid colors)')
        }
        if (data.shape === "Triangle") {
            shape = new Triangle()
        }
        if (data.shape === "Square") {
            shape = new Square()
        }
        if (data.shape === "Circle") {
            shape = new Circle()
        }
        shape.setShape(data.color);
        const svg = new SVG(shape).render();
        createDocument(svg);
    }
}

module.exports = CLI

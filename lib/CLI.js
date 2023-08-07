const { createDocument } = require('./document')
const inquirer = require('inquirer')
const fs = require('fs')

class CLI {
    constructor () {
    }
    run() {
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
            message: 'Enter in the color value you would like in rgb or hexidigit with #:'
        },]
        const data = inquirer.prompt(questions)
        const colors = new RegExp("/^#([A-Fa-f0-9]{3}){1,2}$/")
        if  (data.text.length > 3 || data.text.length === 0) {
            console.error('Please enter text')
        }
        if (!colors.test(data.color)) {
            throw new Error('please enter in a valid hex color input')
        }
    }
}
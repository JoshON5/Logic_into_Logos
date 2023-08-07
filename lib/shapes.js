class Shape {
    constructor() {
        this.color = '';
        this.text = '';
    }
    setShapeColor(color) {
       this.color = color;
    }
    setText(text) {
       this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}
class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}\n${this.text.render()}
        </svg>`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" stroke='${this.color}' fill='${this.color}'/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="1" y="25" width="100" height="100" stroke='${this.color}' fill='${this.color}'/>`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="75" r="40" stroke='${this.color}' fill='${this.color}'/>`
    }
}
class Text extends Shape{
    render() {
        return `<text x="50" y="80" font-size="25" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Triangle, Square, Circle, SVG, Text, Shape };
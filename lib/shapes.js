class Shape {
    constructor() {
        this.color = '';
        this.text = '';
    }
    setShape(userColor) {
       this.color = userColor;
    }
    setText(userText) {
       this.text = userText;
    }
}
class SVG {
    constructor(shape) {
        this.shape = shape;
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
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
        return `<rect x="10" y="10" width="100" height="100" stroke='${this.color}' fill='${this.color}'/>`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke='${this.color}' fill='${this.color}'/>`
    }
}

module.exports = { Triangle, Square, Circle, SVG };
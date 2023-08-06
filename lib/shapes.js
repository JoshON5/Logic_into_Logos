class Shape {
    constructor(color = '') {
        this.color = color;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" stroke=${this.color} fill=${this.color}/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="100" height="100" stroke=${this.color} fill=${this.color}/>`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke=${this.color} fill=${this.color}/>`
    }
}

module.exports = {Triangle, Square, Circle};
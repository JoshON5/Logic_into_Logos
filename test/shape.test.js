const { Triangle } = require("../lib/shapes");

describe("Create Shape", () => {
	test("Should create the shape of triangle with a blue color", () => {

		const shape = new Triangle();
		shape.setShapeColor("blue");
		expect(shape.render()).toEqual("<polygon points='50 15, 100 100, 0 100' stroke='blue' fill='blue'/>"
		);
	});
});

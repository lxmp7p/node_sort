const text = require('./index')
const expect = require("chai").expect

describe("sort", function() {
	it("[1,2,3,4,5,6,7,8] -> '1-8'", function() {
		text.getText([1, 2, 3, 4, 5, 6, 7, 8]).then((result) => {
			expect(result).to.equal("1-8");
			done();
		});
	}).timeout(10000);

	it("[1,3,4,5,6,7,8] -> '1,3-8'", function() {
		text.getText([1,3,4,5,6,7,8]).then((result) => {
			expect(result).to.equal("1,3-8'");
			done();
		});
	}).timeout(10000);

	it("[1,2,3,7,8,9,15,17,19,20,21] -> '1-3,7-9,15,17,19-21'", function() {
		text.getText([1,2,3,7,8,9,15,17,19,20,21]).then((result) => {
			expect(result).to.equal("1-8");
			done();
		});
	}).timeout(10000);

	it("[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> '1-6,100,1091,1999-2002'", function() {
		text.getText([1-6,100,1091,1999-2002]).then((result) => {
			expect(result).to.equal("1-8");
			done();
		});
	}).timeout(10000);
});



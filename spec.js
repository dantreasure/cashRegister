describe('basic calculator functionality and rendering', function() {
	var two    = $("#two");
	var times  = $("#times");
	var equals = $("#equals");
	var clear  = $("#goingClear");
	var paren  = $("#paren");

	it("multiplies two numbers together", function() {
		browser.get('http://localhost:8080/#/calculator');
		two.click();
		times.click();
		two.click();
		equals.click();

		expect(element.all(by.css('h3')).getText()).toEqual([ 'Calculator: 4' ]);

	});

	it("correctly catches a syntax error", function() {
		paren.click();
		two.click();
		equals.click();

		expect(element.all(by.css('h3')).getText()).toEqual([ 'Calculator: Syntax Error' ]);
	});

	it("resets to 0 after the 'AC' button is pressed", function() {
		clear.click();

		expect(element.all(by.css('h3')).getText()).toEqual([ 'Calculator: 0' ]);
	});

	it("loads 20 buttons", function() {
		expect(element.all(by.css('button')).count()).toEqual(21);
		//21 includes the navbar button on top
	});
});


describe('cash register operates properly', function() {
	var title  = $("#title");
	var cost   = $("#cost");
	var notes  = $("#notes");
	var submit  = $("#submit");

	it("can enter an item into the register", function() {
		browser.get('http://localhost:8080/#/cashRegister');

		title.sendKeys('test item');
		cost.sendKeys('4.55');
		notes.sendKeys('test notes');
		submit.click();

		expect(element.all(by.css('#sum')).getText()).toEqual([ '$25.55' ]);
	});



});
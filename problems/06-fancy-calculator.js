const Calculator = require("./02-calculator.js")

class FancyCalculator extends Calculator {
constructor(total = 0) {
	super(total = 0)
}
setTotal(newTotal) {
	this.total = newTotal;
	return this.total;
}
modulo(num){
	if (num === 0) {
		throw new error ("Cannot divide by zero");
	}
	this.total %= num ;
	return this.total;
}
squared() {
	this.total = this.total ** 2;
	return this.total;
}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}

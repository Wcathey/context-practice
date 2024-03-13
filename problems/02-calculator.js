
class Calculator {
	constructor(total = 0) {
		this.total = total;

	}
	add(num) {
		this.total = this.total += num;
		return this.total
	}
	subtract(num) {
		this.total = this.total - num;
		return this.total;
	}
	divide(num) {
		if(this.total === 0) {
			this.total = 1;
		}
		this.total = this.total / num;
		return this.total;
	}
	multiply(num) {
		if(this.total === 0) {
			this.total = 1;
		}
		this.total = this.total * num;
		return this.total;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}

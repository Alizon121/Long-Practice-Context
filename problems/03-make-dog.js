
class Dog {
constructor(name) {
	this.name = name;
}

static makeJet() {
	// return newName("Jet");
	const jet = new Dog('Jet');
	return jet
}

changeName(newName) {
this.name = newName;
return this.name
}

speak(word) {
let string = `${this.name} says ${word}`;
return string
}

}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}

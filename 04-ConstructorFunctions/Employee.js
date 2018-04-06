function Employee(id, name, salary){
	//this -> new object
	if (!this instanceof Employee)
		return new Employee(id, name, salary);
	this.id = id;
	this.name = name;
	this.salary = salary;

	this.display = function(){
		console.log(this.id, this.name, this.salary);
	};
	//this is returned by default
}

var emp = new Employee(100,'Magesh',10000);

/*
	1. this -> a new object
	2. this -> returned by default
*/
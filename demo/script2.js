// Function constructor

// var john = {
// 	name: 'John',
// 	yearOfBirth: 1998,
// 	job: 'teacher'
// };



// var Person = function(name, yearOfBirth, job){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// 	this.calculateAge = function() {
// 		console.log(2021 - this.yearOfBirth);
// 	}
// };

// var John = new Person('John', 1998, 'teacher');
// John.calculateAge();

// var Jane = new Person('Jane', 1996, 'designer');
// Jane.calculateAge();

// var Mark = new Person('Mark', 1992, 'retired');
// Mark.calculateAge();



// var Person = function(name, yearOfBirth, job){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };

// Person.prototype.calculateAge = function () {
// 	console.log(2021 - this.yearOfBirth);
// 	return 2021 - this.yearOfBirth;
// }

// Person.prototype.lastName = "Smith"

// Person.prototype.display = function(){
// 	console.log(this.name + " " + this.lastName +" " + this.calculateAge() + " " + this.job);
// }
// var John = new Person('John', 1998, 'teacher');
// // John.calculateAge();
// John.display();

// var Jane = new Person('Jane', 1996, 'designer');
// // Jane.calculateAge();
// Jane.display();

// var Mark = new Person('Mark', 1992, 'retired');
// // Mark.calculateAge();
// Mark.display();



// Object.create
// var personProto = {
// 	calculateAge : function () {
// 		console.log(2021 - this.yearOfBirth);
// 	}
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1998;
// john.job = "teacher";

// var jane = Object.create(personProto,
// {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1996},
// 	job: {value: 'designer'}
// })



// Primitives vs Objects

//Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //Objects
// var obj1 = {
// 	name: 'John',
// 	age: 26
// }
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1);
// console.log(obj2);

// //Functions
// var age = 27;
// var obj = {
// 	name: 'Jonas',
// 	city: 'Lisbon'
// };

// function change(a, b){
// 	a = 30;
// 	b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age, obj.city);



// Passing functions as arguments
// var years = [2001, 1999, 2004, 2010, 1998, 1992, 1965, 1973, 1945, 1920];
// function arrayCalc(arr, fn){
// 	var arrRes = [];
// 	for(var i=0; i<arr.length; i++){
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// };

// function calculateAge(el){
// 	return 2021 - el;
// };

// function isFullage(el){
// 	return el>=30;
// }

// function maxHeartRate(el){
// 	if(el>=18 && el<=81)
// 		return Math.round(206.9 - (0.67 * el));
// 	else
// 		return -1;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullage);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages, fullAges, rates);



// Functions returning functions
// function interviewQuestions(job){
// 	if(job === 'designer'){
// 		return function(name) {
// 			console.log(name + " can u pls explain wht UX design is?");	
// 		}
// 	}
// 	else if(job === 'teacher'){
// 		return function(name){
// 			console.log("what subject do u teach, " + name + "?");
// 		}
// 	}
// 	else{
// 		return function(name){
// 			console.log("Hello " + name + " what do u do?");
// 		}
// 	}
// };
// var teacherQuestion = interviewQuestions('teacher');
// teacherQuestion('John');

// var designerQuestion = interviewQuestions('designer');
// designerQuestion('Jane');

// var coderQuestion = interviewQuestions('coding');
// coderQuestion('Mark');

// interviewQuestions('teacher')('John');
// interviewQuestions('designer')('Jane');
// interviewQuestions('coder')('Mark');



// Immediately Invoked Function Expression (IIFE) - used for data privacy
// function game(){
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }
// game();

// (function(goodLuck){
// 	var score = Math.random() * 10;
// 	console.log(score >= 5 - goodLuck);
// })(5);

// console.log(score);



// Closures
// function retirement(retirementAge){
// 	var a = ' years left until retirement.';
// 	return function(yearOfBirth){
// 		var age = 2021 - yearOfBirth;
// 		console.log((retirementAge - age) + a);
// 	}
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// retirement(66)(1990);

// var retirementGE = retirement(65);
// var retirementIC = retirement(67);
// var retirementIN = retirement(60);

// retirementUS(1998);
// retirementIC(1998);
// retirementGE(1998);
// retirementIN(1998);

// function interviewQuestion(job){
// 	return function(name) {
// 		if(job === 'designer'){
// 			console.log(name + " can u pls explain wht UX design is?");	
// 		}
// 		else if(job === 'teacher'){		
// 			console.log("what subject do u teach, " + name + "?");
// 		}
// 		else{
// 			console.log("Hello " + name + " what do u do?");
// 		}
// 	}
// };

// var jobs = interviewQuestion('teacher');
// jobs('John');

// interviewQuestion('designer')('Julie');
// interviewQuestion('plumber')('Mark');



// Bind, call and apply
var john = {
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + 
				this.job + ' and I\'m ' + this.age + ' years old');
		}
		else if(style === 'friendly'){
			console.log('Hey! what\'s up? I\'m ' + this.name + '. I\'m a ' + 
				this.job + ' and I\'m  ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'Designer'
}
john.presentation('formal', 'morning');
john.presentation('friendly', 'morning');

john.presentation.call(emily, 'formal', 'morning'); // method borrowing
// john.presentation.apply(emily, ['formal', 'morning']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');// method carrying

var emilyFriendly = john.presentation.bind(emily);
emilyFriendly('friendly', 'morning');
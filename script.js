console.log("Hello World!!!");

/*******************
* Variables amd data types
*/
/*
var firstName = 'Subhankar';
console.log(firstName);

var lastName = "Bhattacharyya";

var age = 23;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'teacher';
console.log(job);
*/

// Single line comments
/***********************
* Multi
* Line
* Comments
*/

/*******************
* Variable mutation amd type coersion
*/
/*
var firstName = "Subhankar";
var age = 23;

// Type coersion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is ' + age + " years old " + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is ' + age + " years old " + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last name? ');
console.log(firstName + ' ' + lastName);*/

/*******************
* Basic Operators
*/
/*
// Math operators
var year = 2021 - 23;
var year = 2021 + 23;
var year = 2021 * 23;
var year = 2021 / 23;
console.log(year);

// logical operators
var lol = 2 > 3;
var lol = 2 < 3;
var lol = 2 >= 3;
var lol = 2 <= 3;
console.log(lol);

// typeof operator
console.log(typeof lol);
console.log(typeof year);
console.log(typeof x);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 5 - 6;
console.log(x , y);
*/

/*******************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2.
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether
Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's -> true").
*/
/*
var MWeight = prompt("Enter Mark's weight : ");
var Mheight = prompt("Enter Mark's height : ");
var JWeight = prompt("Enter John's weight : ");
var Jheight = prompt("Enter John's height : ");

var Mbmi = MWeight / (Mheight * Mheight);
var Jbmi = JWeight / (Jheight * Jheight);
console.log(Mbmi, Jbmi);

var compareMJ = Mbmi > Jbmi;

console.log("Is Mark's BMI higher than John's " + compareMJ);
*/

/*******************
* if / else statements
*/
/*
var firstName = 'Subhankar'
var civilStatus = 'commited'

if(civilStatus === 'married'){
	console.log(firstName + " is married.");
}
else if(civilStatus === "commited"){
	console.log(firstName + " is in a relationship");
}
else{
	console.log(firstName + " is Single");
}*/


/*******************
* Ternary operator and switch statements
*/
/*
// Ternary operator
var firstName = 'Subhankar';
var age = 23
age > 18?console.log(firstName + " drinks beer."): console.log(firstName + " drinks juice.");

var drink = age >= 18? 'beer': 'juice';
console.log(firstName + " drinks " + drink);

// Switch statement
var job = 'teacher';
switch (job){
	case 'teacher':
	case 'instructor':
		console.log(firstName + " teaches how to code");
		break;
	case 'driver':
		console.log(firstName + 'drives an uber in Kolkata');
		break;
	case 'designer':
		console.log(firstName + ' designes beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else.');
}
*/

/*******************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

if(height){
	console.log("Variable has been defined");
}
else{
	console.log("Variable has not been defined");
}

// equality operators
height = 23
if(height == '23'){
	console.log("the == operator does type coersion!")
}
*/

/*******************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball in different teams. In the latest
3 games, John's team scored 89, 120, ans 103 points, while Mike's 
team scored 116, 94, and 123 points.

1. Calculate the avg score for each team
2. Decide which teams wins in avg(hihest avg score), and print the 
winner to the console.
Also include the avg score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there migt be a draw

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 
105 points. Like before, log the avg winner to the console. HINT: you 
will need the && operator to take the decision.
5. Like before, change the scores to generate diff. winners, keeping in 
mind there might be draws.
*/
/*
var avgJohn = (89 + 120 + 103)/3;
var avgMike = (116 + 94 + 123)/3;
switch(true){
	case avgJohn>avgMike:
		console.log("John: " + avgJohn + " is the winner against Mike: " + avgMike);
		break;
	case avgJohn<avgMike:
		console.log("John: " + avgJohn + " is the loser against Mike: " + avgMike);
		break;
	default:
		console.log("John: " + avgJohn + " has drawn against Mike: " + avgMike);
}

var avgMary = (97 + 134 + 105)/3;
if(avgJohn > avgMike && avgJohn > avgMary){
	console.log("John: " + avgJohn + " is the winner against Mike: " + avgMike + " and Mary: " + avgMary);
}
else if(avgMike > avgMary) {
	console.log("Mike: " + avgMike + " is the winner against John: " + avgJohn + " and Mary: " + avgMary);
}
else{
	console.log("Mary: " + avgMary + " is the winner against Mike: " + avgMike + " and John: " + avgJohn);
}
*/

/*******************
* Functions
*/
/*
function calulateAge(birthYear){
	return 2021 - birthYear;
}

var myAge = calulateAge(1998);
var ageMike = calulateAge(1990);
var ageSubha = calulateAge(1992);
console.log(myAge, ageMike, ageSubha);

function yearsUntilRetirement(year, firstName){
	var age = calulateAge(year);
	var retirement = 60 - age;
	if(retirement>0)
		console.log(firstName + " retires is " + retirement + " years");
	else
		console.log(firstName + " is already retired");
}
yearsUntilRetirement(1998, "Subhankar");
yearsUntilRetirement(1945, "John");
*/

/*******************
* Function Statements and Expressions
*/
/*
//function declaration
// function whatDoYoudo(job, firstName){

// }
//function expression
var whatDoYoudo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives uber in Lisbon';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';

	}
}
console.log(whatDoYoudo("designer", 'Subhankar'));
console.log(whatDoYoudo("teacher", 'Subhajyoti'));
*/

/*******************
* Arrays
*/
/*
// Initialise new array
var names = ['John', 'Mark', 'Subhankar'];
var years = new Array(1990, 1945, 1998);
console.log(names, names[2], names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
names[names.length + 2] = 'Mark';
console.log(names);

// Different data types
var Subhankar = ['Subhankar', 'Bhattacharyya', 1998, 23, 10.5, 'Software Developer', true];
Subhankar.push('Kolkata');//adds element to the end of the array
Subhankar.unshift('Mr.');// adds element to the begining of the array
Subhankar.pop();// removes the last element of the array
Subhankar.shift();//removes the first element of the array
console.log(Subhankar.indexOf(1998));// return -1 if element is not present
console.log(Subhankar);
*/

/*******************
* CODING CHALLENGE 3
*/
/*
John and his family went on a holiday and went to 3 different restaurants.The bills
were $124, $48, and $268.

To tip the waiter a fair amt, John created a simple tip calculator (as a function). He
likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between
$50 and $200, and 10% if the bill is more tha $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips( one for each bill)
2) Containing all three final paid amts(bill + tip).
*/
/*
bills = [124, 48, 268];
tips = []
for(i=0; i<bills.length; i++){
	if(bills[i] < 50)
		tips.push(bills[i]*0.2);
	else if(bills[i] < 200)
		tips.push(50*0.2 + (bills[i] - 50) * 0.15)
	else
		tips.push(50*0.2 + 150*0.15 + (bills[i] - 200) * 0.1)
}
console.log(tips);
*/
/*******************
* Objects and properties
*/
/*
// Object literals
var suvnkr  = {
	firstName : 'Subhankar',
	lastName : 'Bhattacharyya',
	age : 23,
	birthYear : 1998,
	family : ['Father', 'Mother', 'Brother'],
	job : 'Software developer',
	isMarried : false
};

console.log(suvnkr);
console.log(suvnkr.family);
console.log(suvnkr['lastName']);
suvnkr.job = 'designer';
suvnkr['isMarried'] = true;
console.log(suvnkr);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************
* Objects and properties
*/
/*
var suvnkr  = {
	firstName : 'Subhankar',
	lastName : 'Bhattacharyya',
	birthYear : 1992,
	family : ['Father', 'Mother', 'Brother'],
	job : 'Software developer',
	isMarried : false,
	calcAge : function(){
		return 2021 - this.birthYear;
	},
	setAge : function(){
		this.age = 2021 - this.birthYear;
	}
};
// console.log(suvnkr.age = suvnkr.calcAge());
// console.log(suvnkr.age);
suvnkr.setAge();
console.log(suvnkr);
*/

/*******************
* CODING CHALLENGE 4
*/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs.Let's now implement
the same functionality with objects and methods. 
1. For eachof them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return 
it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective
BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / height*height. (mass in kg, height in meter).
*/

var John = {
	fullName : 'John Smith',
	mass : 92,
	height : 1.95,
	calcBMI : function() { 
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var Mark = {
	fullName : 'Mark Miller',
	mass : 78,
	height : 1.69,
	calcBMI : function() { 
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

John.calcBMI();
Mark.calcBMI();
console.log(John, Mark);

if(John.bmi > Mark.bmi){
	console.log(John.fullName + ' has a higher BMI of ' + John.bmi);
}
else if(John.bmi < Mark.bmi){
	console.log(Mark.fullName + ' has a higher BMI of ' + Mark.bmi);
}
else{
	console.log(John.fullName + ' and ' + Mark.fullName + ' has equal BMI of : ' + John.bmi);
}
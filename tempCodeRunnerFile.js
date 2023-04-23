const Person = function(firstName, birthYear){
//     this.firstName  = firstName;
//     this.birthYear = birthYear
// }

// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear)
// }

// const Student = function(firstName, birthYear, course){
//     //In a regular function call the this keyword is set to undefined
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }
// // The code must be here else it wont work
// // Linking Prototype
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//     console.log(
//         `My name is ${this.firstName} and I study ${this.course}`
//     )
// }

// const mike = new Student('Mike', 2020, 'computer Science');
// mike.introduce();
// mike.calcAge()

// // Quiz
// const Cars = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// Cars.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// Cars.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} Km/h`)
// }

// // Create a new Electric Vehicle
// const EV = function(make, speed, charge){
//     Cars.call(this, make, speed)
//     this.charge = charge
// }

// // Link the Prototype
// EV.prototype = Object.create(Cars.prototype)

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// }

// const tesla = new EV('Tesla', 120, 23)
// console.log(tesla)
// console.log(tesla.chargeBattery())

// console.log(EV.prototype)

// // Cars.prototype.chargeBattery = function(chargeTo){
// //  console.log('BatteryCharge = ChargeTo')
// // }

'use strict'

// const Person = function(firstName, birthYear){
//     // Instance Properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

    // Never Do this! Not a good practice
    // This creates a function in every element
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear)
    // }
// }

// Instead do this
// Person.prototype.calcAge = function(){
//     console.log(2037 - this.birthYear)
// }

// call a constructor function using the new keyword
//  const jonas = new Person('Jonas', 1991)
//  const joshua = new Person('Joshua', 26)

// console.log(jonas, joshua)
// console.log(this)

// Prototypes
// console.log(Person.prototype)
// console.log(jonas)
// jonas.calcAge()
// console.log(Person.prototype)

// Class Declaration
// Every method not in the constructor object will return an object
// class PersonCl {
//     constructor(firstName, lastName, birthYear, ){
//         this.firstName = firstName;
//         this.lastName  = lastName;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//          (2037 - this.birthYear)
//     }
// }

// class StudentCl extends PersonCl { 
//     // If you dont need any new properties you dont need a constructor function in the child class
//     constructor(firstName, birthYear, course){
//         super(firstName, birthYear)
//         this.course = course
//     }

//     introduce(){
//         return (`My name is ${this.firstName} and i am ${this.birthYear} years old`)

//     }

//     // To overide a method from a parent class just rewrite that method in the child 
//     // with the same name
//     calcAge(){
//         return (`I'm ${2037 - this.birthYear} years 
//         old, but as a student I feel more like ${2041 - this.birthYear} old`)
//     }
// }

// const dominga = new StudentCl('Dominga Lutje', 1963 , 'computer Science')
// console.log(dominga.introduce())
// console.log(dominga.calcAge())


// getters and settetrs in JS
// const account = {
//     owner: 'Joshua',
//     movements: [200, 530, 120, 300],

//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//     }
// }

// console.log(account.latest)
// account.latest = 50
// console.log(account.movements)
// // Object.create Method
// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear)
//     } 
// }

// const steven = Object.create(PersonProto)
// console.log(steven)


// Pure Inheritance
// const Person = function(firstName, birthYear){
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

// const PersonProto = {
//     calAge (){
//         console.log(2037 - this.birthYear)
//     }, 

//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);
// create a PersonProto and assign it to studentProto
// const StudentProto = Object.create(PersonProto)

// Methods attached to the student prototype
// StudentProto.init = function(firstName, birthYear,  course){
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }
// StudentProto.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }
// StudentProto.calAge = function(age) {
//     this.age = age
//     console.log(2047 - this.age)
// }
// create a student Prototype and assign it to a student michaela
// const michaela = Object.create(StudentProto)
// michaela.init('Joshua', 1995, "Physics")
// michaela.introduce()
// michaela.calAge(2032)

// Classes
// class Account {
//     constructor(owner, currency, pin){
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         this.movement = [];
//        // this.locale = navigator.language;

//         console.log(`Thanks for openning an account, ${owner}`)
//     }   
// }

// const acc1 = new Account("Jonas", "EUR", 1111)
// console.log(acc1)

// const student = {
//     name: "David Ravvy", 
//     class: "V1",
//     rollNo:12
// }

// // delete student.rollNo;
// console.log(Object.keys(student))

// const library = [ 
//     {
//         author: "Bill Gates",
//         title: "The Road Ahead",
//         readingStatus: true
//     },
//     {
//         author: "Steve Job",
//         title: "Walter Isaacson",
//         readingStatus: true
//     }, 
//     {
//         author: "Suzanne Collins",
//         title: "Mockingjay: The final book of Hunger Games",
//         readingStatus: false
//     }, 

// ]

// library.forEach(element => {
//        console.log(Object.values(element)[2]) 
//  });

// for (let i = 0; i< library.length; i++) {
//     if (library[i].readingStatus === true) {
//         console.log(`i have read this
//         ${library[i].title} by  ${library[i].author}`)
//     }else{
//     console.log(`You need to read this book ${library[i].title}
//     by ${library[i].author}`)
//     }

// }

class VolumeCylinder {
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    volume (){
        return (Math.PI*(this.radius**2)*this.height).toFixed(4) 
    }
}

const cylinderVolume = new VolumeCylinder(23, 34)

console.log(cylinderVolume.volume())
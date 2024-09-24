class Person {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
 sayHello() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
 }
 eat(){
  console.log(`${this.name} is eating.`);
 }
}

const person1 = new Person('John', 25);
person1.sayHello();
person1.eat();

const person2 = new Person("Sehan", 20);
person2.sayHello();

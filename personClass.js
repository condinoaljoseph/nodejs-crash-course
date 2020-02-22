class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      'hello my name is ' +
        this.name +
        ' i am ' +
        this.age +
        'years old from Person class'
    );
  }
}

module.exports = Person;

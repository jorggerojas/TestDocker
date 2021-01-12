class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
  }

  present() {
    return `My dog's ${this.name} and has ${this.age}.
     ${this.name}'s breed is ${this.breed} and the color is ${this.color}`;
  }
}
export default Dog;

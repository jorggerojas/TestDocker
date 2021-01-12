class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
  }

  present() {
    return `My dog's ${this.name} and he's ${this.age} yo. ${this.name}'s ${this.breed} and the color is ${this.color}`;
  }
}
export default Dog;

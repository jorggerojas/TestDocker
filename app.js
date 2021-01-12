import user from "./user";
import Dog from "./dog";
import math from "./math";

const todd = new Dog("Todd", 2, "Labrador", "golden");
const tobby = new Dog("Tobby", 2, "Chow chow", "black");

console.log(`*************** START LOGS ***************`);
console.log(todd.present());
console.log(todd.name);
console.log(tobby.present());
console.log(tobby.age);
console.log(math([1, 2, 3]).add());
console.log(JSON.stringify(user));
console.log(user);
console.log(`*************** END LOGS ***************`);

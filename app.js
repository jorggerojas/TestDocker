import user from "./user.js";
import Dog from "./dog.js";
import math from "./math.js";

const todd = new Dog("Todd", 2, "Labrador", "golden");
const tobby = new Dog("Tobby", 13, "Chow chow", "black");

console.log(`*************** START LOGS ***************`);
console.log(todd.present());
console.log(tobby.present());
console.log(math.add([1, 2, 3]));
console.log(user);
console.log(`*************** END LOGS ***************`);

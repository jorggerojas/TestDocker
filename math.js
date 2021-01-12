const math = {
  add: (...args) => {
    var result = 0;
    args[0].forEach((num) => (result += parseInt(num)));
    return result;
  },
};

export default math;

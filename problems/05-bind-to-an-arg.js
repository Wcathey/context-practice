function bindToAnArg(func, arg) {
  return func.bind(bindToAnArg, arg);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;

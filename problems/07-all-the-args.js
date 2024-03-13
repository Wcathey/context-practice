function allTheArgs(func, ...args) {
  return func.bind(allTheArgs, ...args)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;

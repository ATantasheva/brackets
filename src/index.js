module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = [];
  
  let newBracketsConfig01 = new Map(bracketsConfig);

  str.split('').forEach((elem) => {
    if (elem == newBracketsConfig01.get(arr[arr.length - 1])) {
      arr.pop();
    } else {
      arr.push(elem);
    }
  })
  return arr.length !== 0 ? false : true;
}

function myFunction(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push("(");
    } else if (s[i] === ")") {
      if (arr.pop() !== "(") {
        return false;
      }
    }
  }

  return arr.length === 0;
}

console.log(myFunction("()")); //true
console.log(myFunction("(")); //false
console.log(myFunction("(}")); //false

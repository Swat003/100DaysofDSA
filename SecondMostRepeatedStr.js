const secondMostRepeatedStr = (value) => {
  let arr = value.sort();
  const frequencyCounter = {};
  arr.map((item) => {
    if (frequencyCounter.hasOwnProperty(item)) {
      frequencyCounter[item] = frequencyCounter[item] + 1;
    } else {
      frequencyCounter[item] = 1;
    }
  });
  const newarr = Object.keys(frequencyCounter);
  return newarr[1];
};

const arr = ["bbb", "aaa", "ccc", "bbb", "aaa", "aaa"];
const arr2 = ["geek", "for", "geek", "for", "geek", "aaa"];
console.log(secondMostRepeatedStr(arr)); //bbb
console.log(secondMostRepeatedStr(arr2)); //for

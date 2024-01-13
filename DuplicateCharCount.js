function duplicateChars(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char in charCount) {
    if (charCount[char] > 1) {
      console.log(`${char}, count = ${charCount[char]}`);
    }
  }
}

console.log(duplicateChars("geeksforgeeks"));

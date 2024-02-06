function myFunction(str, string) {
  let a = str.split("").sort().join("");
  let b = string.split("").sort().join("");

  if (a === b) {
    console.log(true);
  } else {
    console.log(false);
  }
}

myFunction("anagram", "nagaram");

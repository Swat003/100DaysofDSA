function myFunction(str) {
  let s = str.split("").reverse().join("");

  if (str === s) {
    document.write(true);
    console.log(true);
  } else {
    document.write(false);
    console.log(false);
  }
}

myFunction("ollo");

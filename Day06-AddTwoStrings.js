function addStrings(num1, num2) {
  let result = "";
  let carry = 0;

  const maxLength = Math.max(num1.length, num2.length);

  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const digit1 = parseInt(num1[i]);
    const digit2 = parseInt(num2[i]);

    const sum = digit1 + digit2 + carry;

    carry = Math.floor(sum / 10);

    const currentDigit = sum % 10;

    result = currentDigit.toString() + result;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
}

// Examples
console.log(addStrings("11", "123")); // Output: "134"
console.log(addStrings("456", "77")); // Output: "533"
console.log(addStrings("0", "0")); // Output: "0"

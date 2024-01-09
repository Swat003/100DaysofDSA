var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let longestPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0] == "") return "";
    if (strs.every((str) => str[i] === strs[0][i])) {
      longestPrefix += strs[0][i];
    } else break;
  }
  return longestPrefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

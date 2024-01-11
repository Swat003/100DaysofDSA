function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mappingST = {};
  const mappingTS = {};

  for (let i = 0; i < s.length; i++) {
    const strS = s[i];
    const strT = t[i];

    if (
      (mappingST[strS] && mappingST[strS] !== strT) ||
      (mappingTS[strT] && mappingTS[strT] !== strS)
    ) {
      return false;
    }

    mappingST[strS] = strT;
    mappingTS[strT] = strS;
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true

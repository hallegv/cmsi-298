function isValid(s) {
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push[s[i]];
    } else if (stack[stack.length - 1] == map[s[i]]) {
      stack.pop();
    }
  }
  return stack.length == 0;
}

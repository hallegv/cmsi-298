// Although longer than the function below it, this is faster!!
const lengthOfLastWord = function(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i—-) {
    if (s[i] == ‘ ‘ && length != 0) {
      return length;
    } else if (s[i] != ‘ ‘) {
      length++;
    }
  }
  return length;
}

// using fun JavaScript helpers
const lengthOfLastWord = function(s) {
  sArray = s.trim().split(“ “);
  return sArray[sArray.length-1].length;
}

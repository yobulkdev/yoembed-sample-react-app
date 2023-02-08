var stringSimilarity = require("string-similarity");

var similarity = stringSimilarity.compareTwoStrings("healed", "sealed");

var matches = stringSimilarity.findBestMatch("joining_date", [
  "First Name",
  "DoJ",
  "adf",
]);

console.log(matches);

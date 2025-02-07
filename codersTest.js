/** QUESTION 4 - WORDS TO MARKS **/
function wordsToMarks(string) {
  let sum = 0;
  for (let i in string) {
    sum += string.toLowerCase().charCodeAt(i) - 96;
  }
  return sum;
}

console.log(wordsToMarks("friendship"));

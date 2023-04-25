function exclusion(str) {
  return "un" + str;
}

function strengthen(str) {
  return "plus" + str;
}

function emphasize(str) {
  return "doubleplus" + str;
}

function exclusionButton() {
  var word = document.getElementById("word-input").value;
  var result = exclusion(word);
  document.getElementById("result").innerHTML = result;
}

function strengthenButton() {
  var word = document.getElementById("word-input").value;
  var result = strengthen(word);
  document.getElementById("result").innerHTML = result;
}

function emphasizeButton() {
  var word = document.getElementById("word-input").value;
  var result = emphasize(word);
  document.getElementById("result").innerHTML = result;
}

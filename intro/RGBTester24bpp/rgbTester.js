var rValue = 0;
var gValue = 0;
var bValue = 0
var bpc = 8;
var base = 10;

function hexColor(r, g, b) {
  var multiplier = Math.floor(255 / (Math.pow(2, bpc) - 1));
  var fullHexColor = "#"+hex(r*multiplier, 2)+hex(g*multiplier, 2)+hex(b*multiplier, 2);
  return fullHexColor;
}

function hex(n, d) {
  var s = n.toString(16);
  while (s.length < d) {
    s = "0" + s;
  }
  return s.toUpperCase();
}

function isHex(str) {
  for (var i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if ((charCode > 47 && charCode < 58)
    || (charCode > 64 && charCode < 71)
    || (charCode > 96 && charCode < 103)) {
      // it's valid
    } else {
      return false;
    }
  }
  return true;
}

function binary(n, d) {
  var s = n.toString(2);
  while (s.length < d) {
    s = "0" + s;
  }
  return s;
}

function isBinary(str) {
  for (var i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if (charCode > 47 && charCode < 50) {
      // it's valid
    } else {
      return false;
    }
  }
  return true;
}

function adjustGuessInput() {
  // For now just clear the contents
  $("#codeGuess").get(0).value = "";
  if (base == 16) {
    $("#codeGuess").get(0).size = bpc * 3 / 4 + 1;
    $("#codeGuess").get(0).maxLength = bpc * 3 / 4;
  } else { // base == 2
    $("#codeGuess").get(0).size = bpc * 3 + 1;
    $("#codeGuess").get(0).maxLength = bpc * 3;
  }
}

function getRandomColor() {
  var r = Math.trunc(Math.random() * Math.pow(2, bpc));
  var g = Math.trunc(Math.random() * Math.pow(2, bpc));
  var b = Math.trunc(Math.random() * Math.pow(2, bpc));
  return [r, g, b];
}

function showRandomColor(event) {
  color = getRandomColor();
  rValue = color[0];
  gValue = color[1];
  bValue = color[2];
  $("#colorToGuess").get(0).style.backgroundColor = hexColor(rValue, gValue, bValue);
  $("#colorYouGuessed").get(0).style.backgroundColor = "#FFFFFF";
  $("#codeGuessR").get(0).value = "";
  $("#codeGuessR").get(0).disabled = false;
  $("#codeGuessG").get(0).value = "";
  $("#codeGuessG").get(0).disabled = false;
  $("#codeGuessB").get(0).value = "";
  $("#codeGuessB").get(0).disabled = false;
  $("#checkGuess").get(0).disabled = false;
  $("#guessCodeError").get(0).style.display = "none";
  $("#guessCodeResults").get(0).style.display = "none";
  $("#guessCodeControls").get(0).style.display = "block";
  $("#yourColor").get(0).style.display = "none";
}

function checkCodeGuess(event) {
  var dpc = bpc; // digits per color
  var codeLen = bpc * 3; // assuming binary
  if (base == 16) {
    dpc = bpc / 4;
    codeLen = bpc * 3 / 4;
  }
  var codeGuessR = $("#codeGuessR").get(0).value;
  var codeGuessG = $("#codeGuessG").get(0).value;
  var codeGuessB = $("#codeGuessB").get(0).value;
  if (codeGuessR.length == 0 || codeGuessG.length == 0 || codeGuessB.length == 0) {
    $("#guessCodeError").get(0).innerHTML = "You must provide 3 values for your guess!";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else if (codeGuessR > 255 || codeGuessR < 0 || codeGuessG > 255 || codeGuessG < 0 || codeGuessB > 255 || codeGuessB < 0) {
    $("#guessCodeError").get(0).innerHTML = "All values must be between 0 and 255 (inclusive)!";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else {
    $("#guessCodeResults").get(0).style.display = "block";
    $("#checkGuess").get(0).disabled = true;
    $("#guessCodeError").get(0).innerHTML = "";
    $("#guessCodeError").get(0).style.display = "none";
    var rGuessStr = codeGuessR;
    var gGuessStr = codeGuessG;
    var bGuessStr = codeGuessB;
    var rGuess = parseInt(rGuessStr, base);
    var gGuess = parseInt(gGuessStr, base);
    var bGuess = parseInt(bGuessStr, base);
    var rDiff = Math.abs(rGuess - rValue);
    var gDiff = Math.abs(gGuess - gValue);
    var bDiff = Math.abs(bGuess - bValue);
    var totalDiff = rDiff + gDiff + bDiff;
    var worstPossibleDiffR = Math.abs((1-Math.round(rValue / 255)) * 255 - rValue)
    var worstPossibleDiffG = Math.abs((1-Math.round(gValue / 255)) * 255 - gValue)
    var worstPossibleDiffB = Math.abs((1-Math.round(bValue / 255)) * 255 - bValue)
    var worstPossibleDiff = worstPossibleDiffR + worstPossibleDiffG + worstPossibleDiffB
    var percentageDiff = Math.trunc(totalDiff * 100 / worstPossibleDiff);
    $("#actualColorR").get(0).innerHTML = rValue;
    $("#actualColorG").get(0).innerHTML = gValue;
    $("#actualColorB").get(0).innerHTML = bValue;

    $("#guessColorR").get(0).innerHTML = rGuess;
    $("#guessColorG").get(0).innerHTML = gGuess;
    $("#guessColorB").get(0).innerHTML = bGuess;

    $("#guessCodePercentageOff").get(0).innerHTML = percentageDiff;
    $("#guessCodePercentageCorrect").get(0).innerHTML = 100 - percentageDiff;

    $("#colorYouGuessed").get(0).style.backgroundColor = hexColor(rGuess, gGuess, bGuess);
    $("#yourColor").get(0).style.display = "inline-block";
  }
}

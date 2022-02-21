var rValue = 0;
var gValue = 0;
var bValue = 0
var bpc = 1;
var base = 2;

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

function bpcChange(event) {
  bpc = $("#bpcControl").get(0).value;
  $("#bpc").get(0).innerHTML = bpc;
  rValue = 0;
  gValue = 0;
  bValue = 0;
  // Automatically switch to hex if you can
  if (bpc % 4 == 0) {
    $("#hexBase").get(0).disabled = false;
    $("#baseSystem").get(0).value = "16"
  } else { // base == 2
    $("#hexBase").get(0).disabled = true;
    $("#baseSystem").get(0).value = "2"
  }
  changeBase(null);
  $("#guessCodeControls").get(0).style.display = "none";
  $("#guessCodeError").get(0).style.display = "none";
  $("#guessCodeResults").get(0).style.display = "none";
}

function changeBase(event) {
  base = $("#baseSystem").get(0).value;
  adjustGuessInput();
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
  $("#codeGuess").get(0).value = "";
  $("#codeGuess").get(0).disabled = false;
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
  var codeGuess = $("#codeGuess").get(0).value;
  if (base == 2 && ! isBinary(codeGuess)) {
    $("#guessCodeError").get(0).innerHTML = "Your answer must be binary digits only! (0 or 1)";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else if (base == 16 && !isHex(codeGuess)) {
    $("#guessCodeError").get(0).innerHTML = "Your answer must be hex digits only! (0-F)";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else if (codeGuess.length > codeLen) {
    $("#guessCodeError").get(0).innerHTML = "Too many digits in your answer!";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else if (codeGuess.length < codeLen) {
    $("#guessCodeError").get(0).innerHTML = "Not enough digits in your answer!";
    $("#guessCodeError").get(0).style.display = "block";
    $("#guessCodeResults").get(0).style.display = "none";
  } else {
    $("#guessCodeResults").get(0).style.display = "block";
    $("#checkGuess").get(0).disabled = true;
    $("#guessCodeError").get(0).innerHTML = "";
    $("#guessCodeError").get(0).style.display = "none";
    var rGuessStr = codeGuess.substring(0, dpc);
    var gGuessStr = codeGuess.substring(dpc, dpc*2);
    var bGuessStr = codeGuess.substring(dpc*2);
    var rGuess = parseInt(rGuessStr, base);
    var gGuess = parseInt(gGuessStr, base);
    var bGuess = parseInt(bGuessStr, base);
    var rDiff = Math.abs(rGuess - rValue);
    var gDiff = Math.abs(gGuess - gValue);
    var bDiff = Math.abs(bGuess - bValue);
    var totalDiff = rDiff + gDiff + bDiff;
    var percentageDiff = Math.trunc(totalDiff * 100 / ((Math.pow(2, bpc) - 1) * 3));

    var rValueStr = binary(rValue, dpc);
    if (base == 16) {
      rValueStr = hex(rValue, dpc);
    }
    var rCorrectPart = "";
    for (var i = 0; i < dpc; i++) {
      if (rValueStr[i] == rGuessStr[i]) {
        rCorrectPart += rGuessStr[i];
      } else {
        break;
      }
    }
    var rIncorrectPart = rValueStr.substring(rCorrectPart.length);
    $("#actualColorR .correct").get(0).innerHTML = rCorrectPart;
    $("#actualColorR .incorrect").get(0).innerHTML = rIncorrectPart;

    var gValueStr = binary(gValue, bpc);
    if (base == 16) {
      gValueStr = hex(gValue, dpc);
    }
    var gCorrectPart = "";
    for (var i = 0; i < dpc; i++) {
      if (gValueStr[i] == gGuessStr[i]) {
        gCorrectPart += gGuessStr[i];
      } else {
        break;
      }
    }
    var gIncorrectPart = gValueStr.substring(gCorrectPart.length);
    $("#actualColorG .correct").get(0).innerHTML = gCorrectPart;
    $("#actualColorG .incorrect").get(0).innerHTML = gIncorrectPart;

    var bValueStr = binary(bValue, bpc);
    if (base == 16) {
      bValueStr = hex(bValue, dpc);
    }
    var bCorrectPart = "";
    for (var i = 0; i < dpc; i++) {
      if (bValueStr[i] == bGuessStr[i]) {
        bCorrectPart += bGuessStr[i];
      } else {
        break;
      }
    }
    var bIncorrectPart = bValueStr.substring(bCorrectPart.length);
    $("#actualColorB .correct").get(0).innerHTML = bCorrectPart;
    $("#actualColorB .incorrect").get(0).innerHTML = bIncorrectPart;

    var guess = $("#codeGuess").get(0).value;
    var dpc = guess.length / 3;
    $("#guessColorR").get(0).innerHTML = guess.substring(0, dpc);
    $("#guessColorG").get(0).innerHTML = guess.substring(dpc, dpc*2);
    $("#guessColorB").get(0).innerHTML = guess.substring(dpc*2);

    $("#resultsBPC").get(0).innerHTML = bpc;
    $("#guessCodePercentageOff").get(0).innerHTML = percentageDiff;
    $("#guessCodePercentageCorrect").get(0).innerHTML = 100 - percentageDiff;

    $("#colorYouGuessed").get(0).style.backgroundColor = hexColor(rGuess, gGuess, bGuess);
    $("#yourColor").get(0).style.display = "inline-block";
  }
}

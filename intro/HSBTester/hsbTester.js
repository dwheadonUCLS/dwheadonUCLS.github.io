$( document ).tooltip();
$( document ).ready(function() {
    drawHues();
});

var rValue = 0;
var gValue = 0;
var bValue = 0
var bpc = 1;
var rGuess = 0;
var gGuess = 0;
var bGuess = 0;

function hex(number, digits) {
  var s = number.toString(16);
  while (s.length < digits) {
    s = "0" + s;
  }
  return s.toUpperCase();
}

function hexColor(r, g, b, bpc) {
  var multiplier = Math.floor(255 / (Math.pow(2, bpc) - 1));
  var fullHexColor = "#"+hex(r*multiplier, 2)+hex(g*multiplier, 2)+hex(b*multiplier, 2);
  return fullHexColor;
}

function binary(n, d) {
  var s = n.toString(2);
  while (s.length < d) {
    s = "0" + s;
  }
  return s;
}

function bpcChange(event) {
  bpc = $("#bpcControl").get(0).value;
  $("#bpc").get(0).innerHTML = bpc;
  // showRandomCode();
  $("#colorToGuess").get(0).style.display = "none";
  $("#hue").get(0).style.display = "none";
  $("#saturation").get(0).style.display = "none";
  $("#brightness").get(0).style.display = "none";
  $("#chosenColor").get(0).style.display = "none";
  $("#actualColor").get(0).style.display = "none";
  $("#checkGuess").get(0).style.display = "none";
  $("#guessResults").get(0).style.display = "none";
}

function getRandomColor() {
  var r = Math.trunc(Math.random() * Math.pow(2, bpc));
  var g = Math.trunc(Math.random() * Math.pow(2, bpc));
  var b = Math.trunc(Math.random() * Math.pow(2, bpc));
  return [r, g, b];
}

function showRandomCode() {
  var color = getRandomColor();
  rValue = color[0];
  gValue = color[1];
  bValue = color[2];
  $("#bRRepr").get(0).innerHTML = binary(rValue, bpc);
  $("#bGRepr").get(0).innerHTML = binary(gValue, bpc);
  $("#bBRepr").get(0).innerHTML = binary(bValue, bpc);
  if (bpc == 4 || bpc == 8) {
    $("#hRRepr").get(0).innerHTML = hex(rValue, bpc/4);
    $("#hGRepr").get(0).innerHTML = hex(gValue, bpc/4);
    $("#hBRepr").get(0).innerHTML = hex(bValue, bpc/4);
  } else {
    $("#hRRepr").get(0).innerHTML = "N";
    $("#hGRepr").get(0).innerHTML = "a";
    $("#hBRepr").get(0).innerHTML = "N";
  }
  $("#colorToGuess").get(0).style.display = "block";
  $("#hue").get(0).style.display = "block";
  $("#saturation").get(0).style.display = "none";
  $("#brightness").get(0).style.display = "none";
  $("#chosenColor").get(0).style.display = "none";
  $("#actualColor").get(0).style.display = "none";
  $("#checkGuess").get(0).style.display = "none";
  $("#checkGuess").get(0).disabled = false;
  $("#guessResults").get(0).style.display = "none";
}

function drawHues() {
  var maxColorValue = 255;
  var numHues = 255 * 6 + 1;
  var swathSize = 2 * Math.PI / numHues;
  var swathOverlap = 0.01;
  var radStart = 0;
  var dc = document.getElementById('hueChoices');
  var HUE_STEP = 1;

  if(dc && dc.getContext) {
    var ctx = dc.getContext('2d');
    ctx.clearRect(0, 0, dc.width, dc.height);
    var center = dc.width / 2;

    var red = maxColorValue;
    var green = 0;
    var blue = 0;
    var x = 0;
    var y = 0;
    for (green = 0; green < maxColorValue; green += HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    green = maxColorValue;
    for (red = maxColorValue; red > 0; red -= HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    red = 0;
    for (blue = 0; blue < maxColorValue; blue += HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    blue = maxColorValue;
    for (green = maxColorValue; green > 0; green -= HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    green = 0;
    for (red = 0; red < maxColorValue; red += HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    red = maxColorValue;
    for (blue = maxColorValue; blue > 0; blue -= HUE_STEP, radStart += swathSize) {
      ctx.fillStyle = hexColor(red, green, blue, 8);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center, radStart, radStart+swathSize+swathOverlap);
      ctx.closePath();
      ctx.fill();
    }
    blue = 0;
    dc.onclick = chooseHue;
  }
}

function chooseHue(e) {
  var canvas = document.getElementById("hueChoices");
  //var numShades = document.getElementById("numShades");
  //numShades.onchange = showColorOptions;
  //var notice = document.getElementById("selectColorNotice");
  //notice.innerHTML = "Select a shade of this color";
  var context = canvas.getContext("2d");
  var pixel = context.getImageData(e.offsetX, e.offsetY, 1, 1);
  var hueR = pixel.data[0];
  var hueG = pixel.data[1];
  var hueB = pixel.data[2];
  showSaturationOptions(hueR, hueG, hueB);
}

var highlight = $("#spectrumHighlight").get(0);
var highlightInterval;
var highlightState = 0;
var highlightIncrement = 10;
var highlightStateIncreasing = true;

function blinkSpectrumHighlight() {
  if (highlightStateIncreasing) {
    highlightState += highlightIncrement;
    if (highlightState >= 255) {
      highlightState = 255;
      highlightStateIncreasing = false;
    }
  } else {
    highlightState -= highlightIncrement;
    if (highlightState <= 0) {
      highlightState = 0;
      highlightStateIncreasing = true;
    }
  }
  highlight.style.borderColor = "rgb("+highlightState+","+highlightState+","+highlightState+")";
}

function showSaturationOptions(rStart, gStart, bStart) {
  var canvas = document.getElementById("saturationChoices");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  var brightness = rStart + gStart + bStart;
  var greyValue = brightness / 3;
  var rDiff = Math.abs(rStart - greyValue);
  var gDiff = Math.abs(gStart - greyValue);
  var bDiff = Math.abs(bStart - greyValue);
  var rDir = (greyValue - rStart) / rDiff;
  var gDir = (greyValue - gStart) / gDiff;
  var bDir = (greyValue - bStart) / bDiff;
  var rProg = 0;
  var gProg = 0;
  var bProg = 0;
  var x = 0;
  var numSaturations = 1;
  while (rProg < rDiff && gProg < gDiff && bProg < bDiff) {
    // Look for the smallest change possible
    var rNextPercent = (rProg + 1) / rDiff;
    var gNextPercent = (gProg + 1) / gDiff;
    var bNextPercent = (bProg + 1) / bDiff;
    if (rNextPercent < gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        numSaturations++;
      } else if (rNextPercent == bNextPercent) {
        rProg++;
        bProg++;
        numSaturations++;
      } else {
        bProg++;
        numSaturations++;
      }
    }
    else if (rNextPercent == gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        gProg++;
        numSaturations++;
      } else if (rNextPercent == bNextPercent) {
        // all the same: increment together
        rProg++;
        gProg++;
        bProg++;
        numSaturations++;
      } else { // gNextPercent == rNextPercent > bNextPercent
        bProg++;
        numSaturations++;
      }
    } else { // rNextPercent > gNextPercent
      if (gNextPercent < bNextPercent) {
        gProg++;
        numSaturations++;
      } else if (gNextPercent == bNextPercent) {
        gProg++;
        bProg++;
        numSaturations++;
      } else {
        bProg++;
        numSaturations++;
      }
    }
    var r = rStart+rProg*rDir;
    var g = gStart+gProg*gDir;
    var b = bStart+bProg*bDir;
    context.fillStyle = "rgb("+r+","+g+","+b+")";
    context.fillRect(x, 0, 1, 100);
    x += 1;
  }
  // canvas.height = numSaturations;
  $("#saturation").get(0).style.display = "block";
  canvas.onclick = chooseSaturation;
}

function chooseSaturation(e) {
  var canvas = document.getElementById("saturationChoices");
  var context = canvas.getContext("2d");
  var pixel = context.getImageData(e.offsetX, e.offsetY, 1, 1);
  var hueR = pixel.data[0];
  var hueG = pixel.data[1];
  var hueB = pixel.data[2];
  showBrightnessOptions(hueR, hueG, hueB);
}

function showBrightnessOptions(rMid, gMid, bMid) {
  var canvas = document.getElementById("brightnessChoices");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  var rDiff = 255 - rMid;
  var gDiff = 255 - gMid;
  var bDiff = 255 - bMid;
  var rProg = 0;
  var gProg = 0;
  var bProg = 0;
  var x = 0;
  var numBrightnesses = 1;
  while (rProg < rDiff && gProg < gDiff && bProg < bDiff) {
    // Look for the smallest change possible
    var rNextPercent = (rProg + 1) / rDiff;
    var gNextPercent = (gProg + 1) / gDiff;
    var bNextPercent = (bProg + 1) / bDiff;
    if (rNextPercent < gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        numBrightnesses++;
      } else if (rNextPercent == bNextPercent) {
        rProg++;
        bProg++;
        numBrightnesses++;
      } else {
        bProg++;
        numBrightnesses++;
      }
    }
    else if (rNextPercent == gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        gProg++;
        numBrightnesses++;
      } else if (rNextPercent == bNextPercent) {
        // all the same: increment together
        rProg++;
        gProg++;
        bProg++;
        numBrightnesses++;
      } else { // gNextPercent == rNextPercent > bNextPercent
        bProg++;
        numBrightnesses++;
      }
    } else { // rNextPercent > gNextPercent
      if (gNextPercent < bNextPercent) {
        gProg++;
        numBrightnesses++;
      } else if (gNextPercent == bNextPercent) {
        gProg++;
        bProg++;
        numBrightnesses++;
      } else {
        bProg++;
        numBrightnesses++;
      }
    }
    var r = 255 - rProg;
    var g = 255 - gProg;
    var b = 255 - bProg;
    context.fillStyle = "rgb("+r+","+g+","+b+")";
    context.fillRect(x, 0, 1, 100);
    x += 1;
  }
  // Now the darker colors
  rDiff = rMid;
  gDiff = gMid;
  bDiff = bMid;
  rProg = 0;
  gProg = 0;
  bProg = 0;
  while (rProg < rDiff && gProg < gDiff && bProg < bDiff) {
    // Look for the smallest change possible
    var rNextPercent = (rProg + 1) / rDiff;
    var gNextPercent = (gProg + 1) / gDiff;
    var bNextPercent = (bProg + 1) / bDiff;
    if (rNextPercent < gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        numBrightnesses++;
      } else if (rNextPercent == bNextPercent) {
        rProg++;
        bProg++;
        numBrightnesses++;
      } else {
        bProg++;
        numBrightnesses++;
      }
    }
    else if (rNextPercent == gNextPercent) {
      if (rNextPercent < bNextPercent) {
        rProg++;
        gProg++;
        numBrightnesses++;
      } else if (rNextPercent == bNextPercent) {
        // all the same: increment together
        rProg++;
        gProg++;
        bProg++;
        numBrightnesses++;
      } else { // gNextPercent == rNextPercent > bNextPercent
        bProg++;
        numBrightnesses++;
      }
    } else { // rNextPercent > gNextPercent
      if (gNextPercent < bNextPercent) {
        gProg++;
        numBrightnesses++;
      } else if (gNextPercent == bNextPercent) {
        gProg++;
        bProg++;
        numBrightnesses++;
      } else {
        bProg++;
        numBrightnesses++;
      }
    }
    var r = rMid - rProg;
    var g = gMid - gProg;
    var b = bMid - bProg;
    context.fillStyle = "rgb("+r+","+g+","+b+")";
    context.fillRect(x, 0, 1, 100);
    x += 1;
  }
  $("#brightness").get(0).style.display = "block";
  canvas.onclick = chooseBrightness;
}

function chooseBrightness(e) {
  var canvas = document.getElementById("brightnessChoices");
  var context = canvas.getContext("2d");
  var pixel = context.getImageData(e.offsetX, e.offsetY, 1, 1);
  // 8bpc -> xbpc
  rGuess = Math.floor((pixel.data[0]) / Math.pow(2, 8 - bpc));
  gGuess = Math.floor((pixel.data[1]) / Math.pow(2, 8 - bpc));
  bGuess = Math.floor((pixel.data[2]) / Math.pow(2, 8 - bpc));
  $("#chosenColor").get(0).style.display = "inline-block";
  $("#colorYouChose").get(0).style.backgroundColor = hexColor(rGuess, gGuess, bGuess, bpc);
  $("#checkGuess").get(0).style.display = "block";
}
function checkColorGuess(event) {
  var dpc = bpc; // digits per color
  var codeLen = bpc * 3; // assuming binary
  $("#bRGuess").get(0).innerHTML = binary(rGuess, bpc);
  $("#bGGuess").get(0).innerHTML = binary(gGuess, bpc);
  $("#bBGuess").get(0).innerHTML = binary(bGuess, bpc);
  if (bpc % 4 == 0) {
    $("#hRGuess").get(0).innerHTML = hex(rGuess, bpc / 4);
    $("#hGGuess").get(0).innerHTML = hex(gGuess, bpc / 4);
    $("#hBGuess").get(0).innerHTML = hex(bGuess, bpc / 4);
  } else {
    $("#hRGuess").get(0).innerHTML = "N";
    $("#hGGuess").get(0).innerHTML = "a";
    $("#hBGuess").get(0).innerHTML = "N";
  }
  $("#actualColor").get(0).style.display = "inline-block";
  $("#colorActual").get(0).style.backgroundColor = hexColor(rValue, gValue, bValue, bpc);
  $("#checkGuess").get(0).disabled = true;
  var rDiff = Math.abs(rGuess - rValue);
  var gDiff = Math.abs(gGuess - gValue);
  var bDiff = Math.abs(bGuess - bValue);
  var totalDiff = rDiff + gDiff + bDiff;
  var percentageDiff = Math.trunc(totalDiff * 100 / ((Math.pow(2, bpc) - 1) * 3));
  $("#resultsBPC").get(0).innerHTML = bpc;
  $("#guessPercentageOff").get(0).innerHTML = percentageDiff;
  $("#guessPercentageCorrect").get(0).innerHTML = 100 - percentageDiff;
  $("#guessResults").get(0).style.display = "block";
  $("#actualBRepr").get(0).innerHTML = $("#bRepr").get(0).innerHTML;
  $("#actualHRepr").get(0).innerHTML = $("#hRepr").get(0).innerHTML;
}

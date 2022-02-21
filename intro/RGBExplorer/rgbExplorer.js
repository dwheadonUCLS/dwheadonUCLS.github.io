$( document ).tooltip();

function hex(n, d) {
  var s = n.toString(16);
  while (s.length < d) {
    s = "0" + s;
  }
  return s.toUpperCase();
}

function binary(n, d) {
  var s = n.toString(2);
  while (s.length < d) {
    s = "0" + s;
  }
  return s;
}

function bpcChange(event) {
  var bpc = $("#bpcControl").get(0).value;
  $("#bpc").get(0).innerHTML = bpc;
  // Reset the values
  $("#redControl").get(0).value = 0;
  $("#greenControl").get(0).value = 0;
  $("#blueControl").get(0).value = 0;
  // Reset the max
  $("#redControl").get(0).max = Math.pow(2, bpc) - 1;
  $("#greenControl").get(0).max = Math.pow(2, bpc) - 1;
  $("#blueControl").get(0).max = Math.pow(2, bpc) - 1;

  $("#redVal").get(0).innerHTML = 0;
  $("#greenVal").get(0).innerHTML = 0;
  $("#blueVal").get(0).innerHTML = 0;

  unlockAll();
  refreshColor();
}

function colorChange(event) {
  if (event.target == $("#redControl").get()[0]) {
    if ($("#linkBR").get(0).innerHTML == '\uf0c1') {
      $("#blueControl").get(0).value = $("#redControl").get(0).value;
      if ($("#linkGB").get(0).innerHTML == '\uf0c1') {
        $("#greenControl").get(0).value = $("#redControl").get(0).value;
      }
    }
    if ($("#linkRG").get(0).innerHTML == '\uf0c1') {
      $("#greenControl").get(0).value = $("#redControl").get(0).value;
      if ($("#linkGB").get(0).innerHTML == '\uf0c1') {
        $("#blueControl").get(0).value = $("#redControl").get(0).value;
      }
    }
  } else if (event.target == $("#greenControl").get()[0]) {
    if ($("#linkRG").get(0).innerHTML == '\uf0c1') {
      $("#redControl").get(0).value = $("#greenControl").get(0).value;
      if ($("#linkBR").get(0).innerHTML == '\uf0c1') {
        $("#blueControl").get(0).value = $("#greenControl").get(0).value;
      }
    }
    if ($("#linkGB").get(0).innerHTML == '\uf0c1') {
      $("#blueControl").get(0).value = $("#greenControl").get(0).value;
      if ($("#linkBR").get(0).innerHTML == '\uf0c1') {
        $("#redControl").get(0).value = $("#greenControl").get(0).value;
      }
    }
  } else if (event.target == $("#blueControl").get()[0]) {
    if ($("#linkGB").get(0).innerHTML == '\uf0c1') {
      $("#greenControl").get(0).value = $("#blueControl").get(0).value;
      if ($("#linkRG").get(0).innerHTML == '\uf0c1') {
        $("#redControl").get(0).value = $("#blueControl").get(0).value;
      }
    }
    if ($("#linkBR").get(0).innerHTML == '\uf0c1') {
      $("#redControl").get(0).value = $("#blueControl").get(0).value;
      if ($("#linkRG").get(0).innerHTML == '\uf0c1') {
        $("#greenControl").get(0).value = $("#blueControl").get(0).value;
      }
    }
  }
  $("#redVal").get(0).innerHTML = $("#redControl").get(0).value;
  $("#greenVal").get(0).innerHTML = $("#greenControl").get(0).value;
  $("#blueVal").get(0).innerHTML = $("#blueControl").get(0).value;
  refreshColor();
}

function refreshColor() {
  var r = parseInt($("#redControl").get()[0].value);
  var g = parseInt($("#greenControl").get()[0].value);
  var b = parseInt($("#blueControl").get()[0].value);
  // $("#color").text("red:" + r + " green:" + g + " blue:" + b);
  var bpc = parseInt($("#bpcControl").get()[0].value);
  $("#bRRepr").get(0).innerHTML = binary(r, bpc);
  $("#bGRepr").get(0).innerHTML = binary(g, bpc);
  $("#bBRepr").get(0).innerHTML = binary(b, bpc);
  if (bpc == 4 || bpc == 8) {
    $("#hRRepr").get(0).innerHTML = hex(r, bpc/4);
    $("#hGRepr").get(0).innerHTML = hex(g, bpc/4);
    $("#hBRepr").get(0).innerHTML = hex(b, bpc/4);
  } else {
    $("#hRRepr").get(0).innerHTML = "N";
    $("#hGRepr").get(0).innerHTML = "a";
    $("#hBRepr").get(0).innerHTML = "N";
  }
  var multiplier = Math.floor(255 / (Math.pow(2, bpc) - 1))
  doDraw(hex(r * multiplier, 2), hex(g * multiplier, 2), hex(b * multiplier, 2));
  spectrumHighlight(r, g, b);
}

function doDraw(r, g, b) {
  var dc = document.getElementById('drawing');
  if(dc && dc.getContext) {
    var cxt = dc.getContext('2d');

    cxt.clearRect(0, 0, dc.width, dc.height);
    cxt.globalCompositeOperation = 'lighter';
    cxt.strokeStyle = "#000000";


    // red
    cxt.fillStyle = "#"+r+"0000";
    cxt.fillRect(0, 0, dc.width*7/8, dc.height*7/8);  // xywh

    // green
    cxt.fillStyle = "#00"+g+"00";
    cxt.fillRect(dc.width/8, 0, dc.width*6/8, dc.height);  // xywh

    // blue
    cxt.fillStyle = "#0000"+b;
    cxt.fillRect(dc.width/8, 0, dc.width*7/8, dc.height*7/8);  // xywh
  }
}

function linkUnlink(event) {
  if (event.target.innerHTML == '\uf0c1') {
    // is linked so unlink it
    event.target.innerHTML = "&#xf127;";
  } else {
    // only link if it and the other component are not locked
    if (event.target == $("#linkRG").get(0)) {
      if ($("#lockR").get(0).innerHTML == '\uf09c' && $("#lockG").get(0).innerHTML == '\uf09c') {
        event.target.innerHTML = "&#xf0c1;";
      } else {
        alert("Can't link when one of the colors is locked!");
      }
    } else if (event.target == $("#linkGB").get(0)) {
      if ($("#lockG").get(0).innerHTML == '\uf09c' && $("#lockB").get(0).innerHTML == '\uf09c') {
        event.target.innerHTML = "&#xf0c1;";
      } else {
        alert("Can't link when one of the colors is locked!");
      }
    } else if (event.target == $("#linkBR").get(0)) {
      if ($("#lockB").get(0).innerHTML == '\uf09c' && $("#lockR").get(0).innerHTML == '\uf09c') {
        event.target.innerHTML = "&#xf0c1;";
      } else {
        alert("Can't link when one of the colors is locked!");
      }
    }
  }
}

function lockUnlock(event) {
  if (event.target.innerHTML == '\uf023') {
    // is locked so unlock it
    event.target.innerHTML = "&#xf09c;";
    event.target.previousElementSibling.disabled = false;
    clearSpectrum();
  } else { // is unlocked
    unlockAll();
    // now lock the target control
    event.target.innerHTML = "&#xf023;";
    event.target.previousElementSibling.disabled = true;
    unlinkAll();
    drawSpectrum();
  }
}

function unlockAll() {
  $("div.control>i").html("&#xf09c;");
  $("input").attr("disabled", false);
  clearSpectrum();
}

function unlinkAll() {
  $("div#controls>i").html("&#xf127;");
}

function clearSpectrum() {
  var dc = document.getElementById('spectrum');
  if(dc && dc.getContext) {
    var cxt = dc.getContext('2d');
    cxt.clearRect(0, 0, dc.width, dc.height);
  }
  clearInterval(highlightInterval);
  highlight.style.borderColor = "rgb(255,255,255)";
}

function drawSpectrum() {
  var bpc = $("#bpcControl").get(0).value;
  var multiplier = Math.floor(255 / (Math.pow(2, bpc) - 1))
  var squareSize = 512 / Math.pow(2, bpc);
  var dc = document.getElementById('spectrum');
  if(dc && dc.getContext) {
    var cxt = dc.getContext('2d');
    cxt.clearRect(0, 0, dc.width, dc.height);
    // Only 1 color can be locked at a time
    if ($("#lockR").get(0).innerHTML == '\uf023') {
      var r = parseInt($("#redControl").get(0).value);
      for (var g = 0; g < Math.pow(2, bpc); g++) {
        for (var b = 0; b < Math.pow(2, bpc); b++) {
            cxt.fillStyle = "#"+hex(r*multiplier, 2)+hex(g*multiplier, 2)+hex(b*multiplier, 2);
            cxt.fillRect(g*squareSize, b*squareSize, squareSize, squareSize);
        }
      }
    }else if ($("#lockG").get(0).innerHTML == '\uf023') {
      var g = parseInt($("#greenControl").get(0).value);
      for (var r = 0; r < Math.pow(2, bpc); r++) {
        for (var b = 0; b < Math.pow(2, bpc); b++) {
            cxt.fillStyle = "#"+hex(r*multiplier, 2)+hex(g*multiplier, 2)+hex(b*multiplier, 2);
            cxt.fillRect(r*squareSize, b*squareSize, squareSize, squareSize);
        }
      }
    } else if ($("#lockB").get(0).innerHTML == '\uf023') {
      var b = parseInt($("#blueControl").get(0).value);
      for (var r = 0; r < Math.pow(2, bpc); r++) {
        for (var g = 0; g < Math.pow(2, bpc); g++) {
            cxt.fillStyle = "#"+hex(r*multiplier, 2)+hex(g*multiplier, 2)+hex(b*multiplier, 2);
            cxt.fillRect(r*squareSize, g*squareSize, squareSize, squareSize);
        }
      }
    }
  }
  dc.onclick = colorSelect;
  $("#spectrumHighlight").get(0).onclick = colorSelect;
  spectrumHighlight($("#redControl").get(0).value, $("#greenControl").get(0).value, $("#blueControl").get(0).value);
  highlightInterval = setInterval(blinkSpectrumHighlight, 10);
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

function colorSelect(e) {
  var bpc = $("#bpcControl").get(0).value;
  var canvas = document.getElementById("spectrum");
  var context = canvas.getContext("2d");
  var pixel = context.getImageData(e.offsetX, e.offsetY, 1, 1);
  var r = Math.floor((pixel.data[0]) / Math.pow(2, 8 - bpc))
  var g = Math.floor((pixel.data[1]) / Math.pow(2, 8 - bpc))
  var b = Math.floor((pixel.data[2]) / Math.pow(2, 8 - bpc))
  $("#redControl").get(0).value = r;
  $("#redVal").get(0).innerHTML = r;
  $("#greenControl").get(0).value = g;
  $("#greenVal").get(0).innerHTML = g;
  $("#blueControl").get(0).value = b;
  $("#blueVal").get(0).innerHTML = b;
  unlinkAll();
  refreshColor();
}

function spectrumHighlight(r, g, b) {
  var bpc = $("#bpcControl").get(0).value;
  var multiplier = 255 / (Math.pow(2, bpc) - 1)
  var squareSize = 512 / Math.pow(2, bpc);
  var r = parseInt($("#redControl").get()[0].value);
  var g = parseInt($("#greenControl").get()[0].value);
  var b = parseInt($("#blueControl").get()[0].value);
  var x = 0;
  var y = 0;
  if ($("#lockR").get(0).innerHTML == '\uf023') {
    x = g*squareSize;
    y = b*squareSize;
  } else if ($("#lockG").get(0).innerHTML == '\uf023') {
    x = r*squareSize;
    y = b*squareSize;
  } else if ($("#lockB").get(0).innerHTML == '\uf023') {
    x = r*squareSize;
    y = g*squareSize;
  }
  x += 1;
  y += 1;
  var highlight = $("#spectrumHighlight").get(0)
  highlight.style.width = squareSize;
  highlight.style.height = squareSize;
  highlight.style.top = y;
  highlight.style.left = x;
}

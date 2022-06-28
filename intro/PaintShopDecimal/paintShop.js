

function applyNumColors() {
  //var colorSection = document.getElementById("colorTable");
  //colorSection.write('<table><tr></tr></table>');
  var colorTableBody = $("#colorTable>tbody")
  colorTableBody.empty();
  var numColors = parseInt($("#numColors").val());
  for (var i = 0; i < numColors; i++) {
    // Assumes the columns are in this order: Bin, Hex, Dec
    colorTableBody.append('<tr><td><input class="red" onkeyup="editDecR(event);" onchange="editDecR();"></input></td><td><input class="green" onkeyup="editDecG(event);" onchange="editDecG();"></input></td><td><input class="blue" onkeyup="editDecB(event);" onchange="editDecB();"></input></td><td>'+ (i>0 ? '<span class="diff">&lt;diff</span>' : '')+'</td></tr>');
  }
  $("input").on("paste", function() {
    var $this = $(this);
    setTimeout(function() {
        var vals = $this.val().split(/\s+/);
        $this.val(vals[0]);
        if ($this.attr("class") == "red") {
          updateDecColor($this[0])
        } else if ($this.attr("class") == "green") {
          updateDecColor($this[0].parentElement.previousElementSibling.firstElementChild)
        } else if ($this.attr("class") == "blue") {
          updateDecColor($this[0].parentElement.previousElementSibling.previousElementSibling.firstElementChild)
        }
        var next = null;
        if ($this.parent().next().find("input").length) {
          next = $this.parent().next().find("input").first();
        } else if ($this.parent().parent().next().find("input").length) {
          next = $this.parent().parent().next().find("input").first();
        } else {
          next = null;
        }
        var i = 1;
        while (next.length && i<vals.length) {
          next.val(vals[i]);
          if (next.attr("class") == "red") {
            updateDecColor(next[0])
          } else if (next.attr("class") == "green") {
            updateDecColor(next[0].parentElement.previousElementSibling.firstElementChild)
          } else if (next.attr("class") == "blue") {
            updateDecColor(next[0].parentElement.previousElementSibling.previousElementSibling.firstElementChild)
          }  
          ++i;
          if (next.parent().next().find("input").length) {
            next = next.parent().next().find("input").first();
          } else if (next.parent().parent().next().find("input").length) {
            next = next.parent().parent().next().find("input").first();
          } else {
            next = null;
          }
        }
    }, 0);
  });
  $("#promptBase").show();
  $("#colorTable").css("display", "table");
  $('input[type="radio"]').prop('checked', false);
}

function enableColorColumn(columnNum) {
  $("#promptBase").hide();
  // Disable all
  $("#colorTable>tbody>tr>td>input").attr("disabled", "disabled");
  // Enable the 3 active columns
  $("#colorTable>tbody>tr>td:nth-child("+((columnNum-1)*3+1)+")>input").removeAttr("disabled");
  $("#colorTable>tbody>tr>td:nth-child("+((columnNum-1)*3+2)+")>input").removeAttr("disabled");
  $("#colorTable>tbody>tr>td:nth-child("+((columnNum-1)*3+3)+")>input").removeAttr("disabled");
}

function editBinR(event) {
  if (event != null) {
    var r = parseInt(event.target.value, 2);
    if (isNaN(r)) {
      r = 0;
    } else if (r > 255) {
      r = 255;
    }
    var redInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    redInput.value = r;
    updateDecColor(redInput);
  }
}

function editBinG(event) {
  if (event != null) {
    var g = parseInt(event.target.value, 2);
    if (isNaN(g)) {
      g = 0;
    } else if (g > 255) {
      g = 255;
    }
    var greenInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    greenInput.value = g;
    updateDecColor(event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild);
  }
}

function editBinB(event) {
  if (event != null) {
    var b = parseInt(event.target.value, 2);
    if (isNaN(b)) {
      b = 0;
    } else if (b > 255) {
      b = 255;
    }
    var blueInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    blueInput.value = b;
    updateDecColor(event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild);
  }
}

function editHexR(event) {
  if (event != null) {
    var r = parseInt(event.target.value, 16);
    if (isNaN(r)) {
      r = 0;
    } else if (r > 255) {
      r = 255;
    }
    var redInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    redInput.value = r;
    updateDecColor(redInput);
  }
}

function editHexG(event) {
  if (event != null) {
    var g = parseInt(event.target.value, 16);
    if (isNaN(g)) {
      g = 0;
    } else if (g > 255) {
      g = 255;
    }
    var greenInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    greenInput.value = g;
    updateDecColor(event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild);
  }
}

function editHexB(event) {
  if (event != null) {
    var b = parseInt(event.target.value, 16);
    if (isNaN(b)) {
      b = 0;
    } else if (b > 255) {
      b = 255;
    }
    var blueInput = event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    blueInput.value = b;
    updateDecColor(event.target.parentElement.nextElementSibling.firstElementChild);
  }
}

function updateDecColor(redInput) {
  var r = parseInt(redInput.value);
  if (isNaN(r)) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }
  redInput.value = r;
  /*
  var rHex2 = r.toString(16).toUpperCase();
  while (rHex2.length < 2) { rHex2 = "0" + rHex2; }
  redInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = rHex2;
  var rBin8 = r.toString(2);
  while (rBin8.length < 8) { rBin8 = "0" + rBin8; }
  redInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = rBin8;
  */

  var greenInput = redInput.parentElement.nextElementSibling.firstElementChild;
  var g = parseInt(greenInput.value);
  if (isNaN(g)) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }
  greenInput.value = g;
  /*
  var gHex2 = g.toString(16).toUpperCase();
  while (gHex2.length < 2) { gHex2 = "0" + gHex2; }
  greenInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = gHex2;
  var gBin8 = g.toString(2);
  while (gBin8.length < 8) { gBin8 = "0" + gBin8; }
  greenInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = gBin8;
  */

  var blueInput = redInput.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
  var b = parseInt(blueInput.value);
  if (isNaN(b)) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }
  blueInput.value = b;
  /*
  var bHex2 = b.toString(16).toUpperCase();
  while (bHex2.length < 2) { bHex2 = "0" + bHex2; }
  blueInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = bHex2;
  var bBin8 = b.toString(2);
  while (bBin8.length < 8) { bBin8 = "0" + bBin8; }
  blueInput.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.value = bBin8;
  */
  var colorTD = redInput.parentElement.parentElement.lastElementChild;
  colorTD.style.backgroundColor = "rgb("+r+","+g+","+b+")";

  if (redInput.parentElement.parentElement.parentElement.firstElementChild != redInput.parentElement.parentElement) {
    // it's not the first row
    var prevR = redInput.parentElement.parentElement.previousElementSibling.children[0].firstElementChild.value;
    var prevG = redInput.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.value;
    var prevB = redInput.parentElement.parentElement.previousElementSibling.children[2].firstElementChild.value;
    var colorDiff = redInput.parentElement.parentElement.lastElementChild.firstElementChild;
    colorDiff.innerHTML = "\&gt;" + (Math.abs(r-parseInt(prevR))+Math.abs(g-parseInt(prevG))+Math.abs(b-parseInt(prevB)));
    colorDiff.style.display = "inline";
  }
}

function editDecR(event) {
  if (event != null) {
    updateDecColor(event.target);
  }
}

function editDecG(event) {
  if (event != null) {
    updateDecColor(event.target.parentElement.previousElementSibling.firstElementChild);
  }
}

function editDecB(event) {
  if (event != null) {
    updateDecColor(event.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild);
  }
}

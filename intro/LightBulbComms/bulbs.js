var numBulbsInput = document.getElementById("numBulbs");
var numLevelsInput = document.getElementById("numLevels");
var switchHideInput = document.getElementById("switchHideInput");
var rowBulbs = document.getElementById("rowBulbs");
var bulbs = [];
var bulbControls = [];

function changeNumBulbs() {
  var numBulbs = numBulbsInput.value;
  var currentBulbCells = document.querySelectorAll("#rowBulbs>td");
  if (numBulbs < currentBulbCells.length) {
    // remove the extras
    for (var i = numBulbs; i < currentBulbCells.length; i++) {
      currentBulbCells[i].remove();
    }
  } else {
    // add new ones
    var levelDisplay = "block";
    if (switchHideInput.checked) {
      levelDisplay = "none";
    }
    for (var i = currentBulbCells.length; i < numBulbs; i++) {
      var cell = document.createElement('td');
      cell.innerHTML = '<img id="b'+i+'" src="bulb.png" /><div class="levelSwitchBox" style="display: '+levelDisplay+'"><span class="levelLabels"><label class="maxLabel">'+(parseInt(numLevelsInput.value)-1)+'</label><label class="minLabel">0</label></span><input id="s'+i+'" class="lightSwitch" type="range" value=0 min=0 max='+(parseInt(numLevelsInput.value)-1)+' onchange="changeLevel('+i+');"></input><span id="l'+i+'" class="currentLevel">0<span></div>';
      rowBulbs.appendChild(cell);
    }
  }
}

function changeNumLevels() {
  var maxLabels = document.querySelectorAll(".maxLabel");
  for (var i = 0; i < maxLabels.length; i++) {
    maxLabels[i].innerHTML = numLevelsInput.value-1;
  }
  var minLabels = document.querySelectorAll(".minLabel");
  for (var i = 0; i < minLabels.length; i++) {
    minLabels[i].innerHTML = 0;
  }
  var lightSwitches = document.querySelectorAll(".lightSwitch");
  for (var i = 0; i < lightSwitches.length; i++) {
    lightSwitches[i].max = numLevelsInput.value - 1;
    changeLevel(lightSwitches[i].id.substring(1));
  }
}

function changeLevel(bulbNum) {
  var bulb = document.getElementById("b"+bulbNum);
  var bulbLevel = parseInt(document.getElementById("s"+bulbNum).value);
  var bulbLevelLabel = document.getElementById("l"+bulbNum);
  var y = 255*bulbLevel/(numLevelsInput.value - 1);
  bulb.style.backgroundColor = "rgb("+y+","+y+","+0+")";
  if (bulbLevel > 9) {
    bulbLevelLabel.innerHTML = String.fromCharCode(65 + bulbLevel-10);
  } else {
    bulbLevelLabel.innerHTML = bulbLevel;
  }
}

function hideSwitches() {
  /*
  var sheet = document.styleSheets[0];
  var rules = sheet.cssRules || sheet.rules;
  rules.deleteRule(0);
  if (switchHideInput.checked) {
    rules.insertRule(".levelSwitchBox { display: none; }", 0);
  } else {
    rules.insertRule(".levelSwitchBox { display: block; }", 0);
  }
  */
  var switches = document.querySelectorAll(".levelSwitchBox");
  for (var i = 0; i < switches.length; i++) {
    if (switchHideInput.checked) {
      switches[i].style.display = "none";
    } else {
      switches[i].style.display = "block";
    }
  }
}

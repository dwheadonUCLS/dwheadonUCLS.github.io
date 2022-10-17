function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var gridSize = 50;
var world = document.getElementById('world');
var worldWidth = world.getAttribute("width");
var worldHeight = world.getAttribute("height");
var worldFileName = getParameterByName('world')
var worldFile = new XMLHttpRequest();

// Precondition: assumes that the data in the file starts with the streets and then the avenues first (in that order) before any beepers
function handleFile() {
  if (worldFile.readyState === 4) {  // document is ready to parse.
    if (worldFile.status === 200) {  // file is found
      allText = worldFile.responseText; 
      lines = worldFile.responseText.split("\n");
      document.getElementById('replace').innerHTML = "World preview for: " + worldFileName + " <br />";
      var canvas = document.getElementById('world');
      var ctx = canvas.getContext('2d');
      for (lineNum in lines) {
        elements = lines[lineNum].split(" ");
        if (elements[0] == "streets") {
          var streets = elements[1];
          worldHeight = gridSize*streets;
          world.setAttribute("height", worldHeight);
        }
        else if (elements[0] == "avenues") {
          var avenues = elements[1];
          worldWidth = gridSize*avenues;
          world.setAttribute("width", worldWidth);
          // Now that we have (theoretically) both the width and the height, we can draw the grid lines
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (var i = 0; i < streets; i++) {
            ctx.moveTo(0, i*gridSize + gridSize / 2);
            ctx.lineTo(worldWidth, i*gridSize + gridSize / 2);
          }
          for (var i = 0; i < avenues; i++) {
            ctx.moveTo(i*gridSize + gridSize / 2, 0);
            ctx.lineTo(i*gridSize + gridSize / 2, worldHeight);
          }
          ctx.stroke();
        }
        else if (elements[0] == "northsouthwalls") {
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(elements[1]*gridSize, worldHeight - (elements[2]-1)*gridSize);
          ctx.lineTo(elements[1]*gridSize, worldHeight - (elements[3])*gridSize);
          ctx.stroke();
        }
        else if (elements[0] == "eastwestwalls") {
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo((elements[2]-1)*gridSize, worldHeight - elements[1]*gridSize);
          ctx.lineTo(elements[3]*gridSize, worldHeight - elements[1]*gridSize);
          ctx.stroke();
        }
        else if (elements[0] == "beepers") {
          ctx.lineWidth = 1;
          ctx.beginPath();
          var centerx = gridSize/2 + (elements[2]-1)*gridSize;
          var centery = worldHeight - gridSize/2 - (elements[1]-1)*gridSize;
          var radius = gridSize/4;
          ctx.fillStyle = "#000000";
          ctx.arc(centerx, centery, radius, 0, 8);
          ctx.fill();
          ctx.stroke();
          ctx.font = gridSize/3 + "px Georgia";
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(elements[3], centerx-gridSize/10, centery+gridSize/10);
        }
      }
    }
  }
}

worldFile.open("GET", worldFileName, true);
worldFile.onreadystatechange = handleFile;
worldFile.send();

var gameLvl = "easy";
var gameState = false;
var stop = true;

const table = document.getElementById("mytab1");
var rowNum, colNum;

//This is for time
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var setTime = setInterval(setTime, 1000);
function setTime()
{
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds%60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}
function pad(val)
{
  var valString = val + "";
  if(valString.length < 2)
  {
    return "0" + valString;
  }
  else
  {
    return valString;
  }
}
function drawMap1(params) {
  rowNum = 7;
  colNum = 7;
  for (let row = 0; row < rowNum; row++) {
    const newTR = document.createElement("tr");
    for (let col = 0; col < colNum; col++) {
      const newTD = document.createElement("td");
      newTD.dataset.rowIndex = row;
      newTD.dataset.colIndex = col;
      newTD.dataset.cnt = 0;
      if (row === 0 && col === 3) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `1`;
      }
      if (col === 1 && row === 1) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `0`;
      }
      if (col === 5 && row === 1) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `2`;
      }
      if (col === 0 && row === 3) {
        newTD.classList.add("tiled");
      }
      if (col === 3 && row === 3) {
        newTD.classList.add("tiled");
      }
      if (col === 6 && row === 3) {
        newTD.classList.add("tiled");
      }
      if (col === 1 && row === 5) {
        newTD.classList.add("tiled");
      }
      if (col === 5 && row === 5) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `2`;
      }
      if (col === 3 && row === 6) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `3`;
      }
      newTR.appendChild(newTD);
    }
    table.appendChild(newTR);
  }
}
function drawMap2(params) {
  rowNum = 7;
  colNum = 7;
  for (let row = 0; row < rowNum; row++) {
    const newTR = document.createElement("tr");
    for (let col = 0; col < colNum; col++) {
      const newTD = document.createElement("td");
      newTD.dataset.rowIndex = row;
      newTD.dataset.colIndex = col;
      newTD.dataset.cnt = 0;
      if (row === 0 && col === 2) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `0`;
      }
      if (col === 4 && row === 0) {
        newTD.classList.add("tiled");
      }
      if (col === 0 && row === 2) {
        newTD.classList.add("tiled");
      }
      if (col === 2 && row === 2) {
        newTD.classList.add("tiled");
      }
      if (col === 4 && row === 2) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `3`;
      }
      if (col === 6 && row === 2) {
        newTD.classList.add("tiled");
      }
      if (col === 3 && row === 3) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `1`;
      }
      if (col === 0 && row === 4) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `2`;
      }
      if (col === 2 && row === 4) {
        newTD.classList.add("tiled");
      }
      if (col === 4 && row === 4) {
        newTD.classList.add("tiled");
      }
      if (col === 6 && row === 4) {
        newTD.classList.add("tiled");
      }
      if (col === 2 && row === 6) {
        newTD.classList.add("tiled");
      }
      if (col === 4 && row === 6) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `2`;
      }
      newTR.appendChild(newTD);
    }
    table.appendChild(newTR);
  }
}
function drawMap3(params) {
  rowNum = 10;
  colNum = 10;
  for (let row = 0; row < rowNum; row++) {
    const newTR = document.createElement("tr");
    for (let col = 0; col < colNum; col++) {
      const newTD = document.createElement("td");
      newTD.dataset.rowIndex = row;
      newTD.dataset.colIndex = col;
      newTD.dataset.cnt = 0;
      if (row === 0 && col === 1) {
        newTD.classList.add("tiled");
      }
      if (row === 1 && col === 5) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `3`;
      }
      if (row === 1 && col === 7) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `2`;
      }
      if (row === 1 && col === 9) {
        newTD.classList.add("tiled");
      }
      if (row === 2 && col === 1) {
        newTD.classList.add("tiled");
        newTD.innerHTML = `0`;
      }
      if (row === 2 && col === 2) {
        newTD.classList.add("tiled");
      }
      if (row === 2 && col === 7) {
        newTD.classList.add("tiled");
      }
      if (row === 3 && col === 4) {
        newTD.classList.add("tiled");
      }
      if (row === 4 && col === 1) {
        newTD.innerHTML = `1`;
        newTD.classList.add("tiled");
      }
      if (row === 4 && col === 4) {
        newTD.classList.add("tiled");
      }
      if (row === 4 && col === 5) {
        newTD.innerHTML = `1`;
        newTD.classList.add("tiled");
      }
      if (row === 4 && col === 6) {
        newTD.classList.add("tiled");
      }
      if (row === 5 && col === 3) {
        newTD.classList.add("tiled");
      }
      if (row === 5 && col === 4) {
        newTD.classList.add("tiled");
      }
      if (row === 5 && col === 5) {
        newTD.classList.add("tiled");
      }
      if (row === 5 && col === 8) {
        newTD.innerHTML = `3`;
        newTD.classList.add("tiled");
      }
      if (row === 6 && col === 5) {
        newTD.classList.add("tiled");
      }
      if (row === 7 && col === 2) {
        newTD.innerHTML = `1`;
        newTD.classList.add("tiled");
      }
      if (row === 7 && col === 8) {
        newTD.classList.add("tiled");
      }
      if (row === 7 && col === 7) {
        newTD.innerHTML = `0`;
        newTD.classList.add("tiled");
      }
      if (row === 8 && col === 0) {
        newTD.innerHTML = `3`;
        newTD.classList.add("tiled");
      }
      if (row === 8 && col === 2) {
        newTD.classList.add("tiled");
      }
      if (row === 8 && col === 4) {
        newTD.innerHTML = `0`;
        newTD.classList.add("tiled");
      }
      if (row === 9 && col === 8) {
        newTD.innerHTML = `0`;
        newTD.classList.add("tiled");
      }
      newTR.appendChild(newTD);
    }
    table.appendChild(newTR);
  }
}

function doColoring(event, element) {
  if (!element.classList.contains("tiled")) {
    if (element.childElementCount !== 0) {
      unlight(element);
    } else {
      lightup(element);
    }
  }
}
function delegate(parent, child, when, what) {
  function eventHandlerFunction(event) {
    let eventTarget = event.target;
    let eventHandler = this;
    let closestChild = eventTarget.closest(child);

    if (eventHandler.contains(closestChild)) {
      what(event, closestChild);
    }
  }

  parent.addEventListener(when, eventHandlerFunction);
}
delegate(table, "td", "click", doColoring);
function lightup(element) {
  var table = document.getElementById("mytab1");
  let trs = table.children;
  let tds = trs[element.dataset.rowIndex].children;
  if (!tds[element.dataset.colIndex].classList.contains("colored")) {
    tds[element.dataset.colIndex].classList.add("colored");
  }
  element.dataset.cnt++;
  const img = document.createElement("img");
  img.src = "bulb.png";
  tds[element.dataset.colIndex].appendChild(img);

  //right of the bulb
  for (let j = parseInt(element.dataset.colIndex) + 1; j < tds.length; j++) {
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      if (!tds[j].classList.contains("colored")) {
        tds[j].classList.add("colored");
      }
      tds[j].dataset.cnt++;
    }
  }
  //left of the bulb
  for (let j = parseInt(element.dataset.colIndex) - 1; j >= 0; j--) {
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      if (!tds[j].classList.contains("colored")) {
        tds[j].classList.add("colored");
      }
      tds[j].dataset.cnt++;
    }
  }
  //top of the bulb
  for (let j = parseInt(element.dataset.rowIndex) - 1; j >= 0; j--) {
    if (trs[j].children[element.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      if (
        !trs[j].children[element.dataset.colIndex].classList.contains("colored")
      ) {
        trs[j].children[element.dataset.colIndex].classList.add("colored");
      }
      trs[j].children[element.dataset.colIndex].dataset.cnt++;
    }
  }
  //bottom of the bulb
  for (let j = parseInt(element.dataset.rowIndex) + 1; j < trs.length; j++) {
    if (trs[j].children[element.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      if (
        !trs[j].children[element.dataset.colIndex].classList.contains("colored")
      ) {
        trs[j].children[element.dataset.colIndex].classList.add("colored");
      }
      trs[j].children[element.dataset.colIndex].dataset.cnt++;
    }
  }
}
function unlight(elem) {
  var table = document.getElementById("mytab1");

  let trs = table.children;
  let tds = trs[elem.dataset.rowIndex].children;
  elem.removeChild(elem.firstElementChild);
  elem.dataset.cnt--;
  if (tds[elem.dataset.colIndex].dataset.cnt == 0) {
    tds[elem.dataset.colIndex].classList.remove("colored");
  } else {
    if (!tds[elem.dataset.colIndex].classList.contains("colored")) {
      tds[elem.dataset.colIndex].classList.add("colored");
    }
  }
  if (elem.classList.contains("wrong")) {
    tds[elem.dataset.colIndex].classList.remove("wrong");
  }

  //right of the bulb
  for (let j = parseInt(elem.dataset.colIndex) + 1; j < tds.length; j++) {
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      tds[j].dataset.cnt--;
      if (tds[j].dataset.cnt == 0) {
        tds[j].classList.remove("colored");
      }
    }
  }
  //left of the bulb
  for (let j = parseInt(elem.dataset.colIndex) - 1; j >= 0; j--) {
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      tds[j].dataset.cnt--;
      if (tds[j].dataset.cnt == 0) {
        tds[j].classList.remove("colored");
      }
    }
  }
  //top of the bulb
  for (let j = parseInt(elem.dataset.rowIndex) - 1; j >= 0; j--) {
    if (trs[j].children[elem.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      trs[j].children[elem.dataset.colIndex].dataset.cnt--;
      if (trs[j].children[elem.dataset.colIndex].dataset.cnt == 0) {
        trs[j].children[elem.dataset.colIndex].classList.remove("colored");
      }
    }
  }
  //bottom of the bulb
  for (let j = parseInt(elem.dataset.rowIndex) + 1; j < trs.length; j++) {
    if (trs[j].children[elem.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      trs[j].children[elem.dataset.colIndex].dataset.cnt--;
      if (trs[j].children[elem.dataset.colIndex].dataset.cnt == 0) {
        trs[j].children[elem.dataset.colIndex].classList.remove("colored");
      }
    }
  }
}
function checkErrors() {
  var table = document.getElementById("mytab1");
  var trs = table.children;
  var unLighted = 0;
  var colorState = true;
  for (var iD = 0; iD < rowNum; iD++) {
    var tds = trs[iD].children;

    for (var jD = 0; jD < colNum; jD++) {
      if (
        !tds[jD].classList.contains("tiled") &&
        !tds[jD].classList.contains("colored")
      ) {
        unLighted++;
      }
      if (tds[jD].childElementCount > 0) {
        checkLights(tds[jD]);
      }
      if (tds[jD].classList.contains("tiled") && tds[jD].innerHTML.length > 0) {
        var colorcnt = tds[jD].innerHTML;
        colorState =
          colorState && parseInt(colorcnt) === innerNum(tds[jD], tds, trs);
        checkNum(tds[jD], tds, trs);
      }
    }
  }
  if (!(unLighted == 0 && colorState)) {
    console.log("You lost");
  } else {
    console.log("you good");
    stop = true;
    document.getElementById("winm").style.display = "block";
    if(stop){
      clearInterval(setTime);
    }
  }
}
function innerNum(e, tds, trs) {
  var numOfBulbsClose = 0;
  var maxNum = e.innerHTML;
  //check right
  if (parseInt(e.dataset.colIndex) + 1 < colNum) {
    if (tds[parseInt(e.dataset.colIndex) + 1].childElementCount > 0) {
      numOfBulbsClose++;
    }
  }
  //check left
  if (e.dataset.colIndex > 0) {
    if (tds[parseInt(e.dataset.colIndex) - 1].childElementCount > 0) {
      numOfBulbsClose++;
    }
  }
  //check down
  if (e.dataset.rowIndex > 0) {
    if (
      trs[parseInt(e.dataset.rowIndex) - 1].children[e.dataset.colIndex]
        .childElementCount > 0
    ) {
      numOfBulbsClose++;
    }
  }
  //check up
  if (parseInt(e.dataset.rowIndex) + 1 < rowNum) {
    if (
      trs[parseInt(e.dataset.rowIndex) + 1].children[e.dataset.colIndex]
        .childElementCount > 0
    ) {
      numOfBulbsClose++;
    }
  }
  return numOfBulbsClose;
}
function checkNum(e, tds, trs) {
  var numOfBulbsClose = 0;
  var maxNum = e.innerHTML;
  //check right
  if (parseInt(e.dataset.colIndex) + 1 < colNum) {
    if (tds[parseInt(e.dataset.colIndex) + 1].childElementCount > 0) {
      numOfBulbsClose++;
      if (numOfBulbsClose > maxNum) {
        e.classList.add("wrong");
        if (e.classList.contains("right")) {
          e.classList.remove("right");
        }
      }
    }
  }
  //check left
  if (e.dataset.colIndex > 0) {
    if (tds[parseInt(e.dataset.colIndex) - 1].childElementCount > 0) {
      numOfBulbsClose++;
      if (numOfBulbsClose > maxNum) {
        e.classList.add("wrong");
        if (e.classList.contains("right")) {
          e.classList.remove("right");
        }
      }
    }
  }
  //check down

  if (e.dataset.rowIndex > 0) {
    if (
      trs[parseInt(e.dataset.rowIndex) - 1].children[e.dataset.colIndex]
        .childElementCount > 0
    ) {
      numOfBulbsClose++;
      if (numOfBulbsClose > maxNum) {
        e.classList.add("wrong");
        if (e.classList.contains("right")) {
          e.classList.remove("right");
        }
      }
    }
  }
  //check up
  if (parseInt(e.dataset.rowIndex) + 1 < rowNum) {
    if (
      trs[parseInt(e.dataset.rowIndex) + 1].children[e.dataset.colIndex]
        .childElementCount > 0
    ) {
      numOfBulbsClose++;
      if (numOfBulbsClose > maxNum) {
        e.classList.add("wrong");
        if (e.classList.contains("right")) {
          e.classList.remove("right");
        }
      }
    }
  }

  if (numOfBulbsClose == maxNum) {
    if (e.classList.contains("wrong")) {
      e.classList.remove("wrong");
    }
    e.classList.add("right");
  }
  if (numOfBulbsClose < maxNum) {
    if (e.classList.contains("wrong")) {
      e.classList.remove("wrong");
    }
    if (e.classList.contains("right")) {
      e.classList.remove("right");
    }
  }
}
function checkLights(elem) {
  var table = document.getElementById("mytab1");

  let trs = table.children;
  let tds = trs[elem.dataset.rowIndex].children;
  //right of the bulb
  var numLightsR = 0;
  var numLightsL = 0;
  var numLightsU = 0;
  var numLightsD = 0;
  for (let j = parseInt(elem.dataset.colIndex) + 1; j < tds.length; j++) {
    // console.log(tds[j])
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      if (tds[j].childElementCount != 0) {
        numLightsR++;
        if (numLightsR >= 1) {
          tds[j].classList.remove("colored");
          tds[j].classList.add("wrong");
        }
      }
    }
  }

  //left of the bulb
  for (let j = parseInt(elem.dataset.colIndex) - 1; j >= 0; j--) {
    if (tds[j].classList.contains("tiled")) {
      break;
    } else {
      if (tds[j].childElementCount != 0) {
        numLightsL++;
        if (numLightsL >= 1) {
          tds[j].classList.remove("colored");
          tds[j].classList.add("wrong");
        }
      }
    }
  }
  //top of the bulb
  for (let j = parseInt(elem.dataset.rowIndex) - 1; j >= 0; j--) {
    if (trs[j].children[elem.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      if (trs[j].children[elem.dataset.colIndex].childElementCount != 0) {
        numLightsU++;
        if (numLightsU >= 1) {
          trs[j].children[elem.dataset.colIndex].classList.remove("colored");
          trs[j].children[elem.dataset.colIndex].classList.add("wrong");
        }
      }
    }
  }
  //bottom of the bulb
  for (let j = parseInt(elem.dataset.rowIndex) + 1; j < trs.length; j++) {
    if (trs[j].children[elem.dataset.colIndex].classList.contains("tiled")) {
      break;
    } else {
      if (trs[j].children[elem.dataset.colIndex].childElementCount != 0) {
        numLightsD++;
        if (numLightsD >= 1) {
          trs[j].children[elem.dataset.colIndex].classList.remove("colored");
          trs[j].children[elem.dataset.colIndex].classList.add("wrong");
        }
      }
    }
  }

  if (
    numLightsD == 0 &&
    numLightsL == 0 &&
    numLightsR == 0 &&
    numLightsU == 0
  ) {
    elem.classList.remove("wrong");
    if (!elem.classList.contains("colored")) {
      elem.classList.add("colored");
    }
  }
}
function changelvl1() {
  gameLvl = "easy";
}
function changelvl2() {
  gameLvl = "advanced";
}
function changelvl3() {
  gameLvl = "extreme";
}

function startGame() {
  gameState = true;
  stop=false;
  document.getElementById("Menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  var interval = setInterval(checkErrors, 3000);
  var nameS = document.getElementById("name");
  var name = nameS.value;

  document.getElementById('restart').addEventListener("click", () => {
    document.getElementById("Menu").style.display = "block";
    document.getElementById("game").style.display = "none";
    table.innerHTML = "";
  })

  if (gameLvl === "easy") {
    drawMap1();
    document.getElementById("outName").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("outName").innerHTML = `${name}`;
    document.getElementById("refresh").addEventListener("click", () => {
      table.innerHTML = "";
      drawMap1();
      document.getElementById("winm").style.display = "none";
      document.getElementById("outName").style.display = "block";
    });
  }

  if (gameLvl === "advanced") {
    drawMap2();
    document.getElementById("time").style.display = "block";
    document.getElementById("outName").style.display = "block";
    document.getElementById("outName").innerHTML = `${name}`;
    document.getElementById("refresh").addEventListener("click", () => {
      table.innerHTML = "";
      drawMap2();
      document.getElementById("winm").style.display = "none";
      document.getElementById("outName").style.display = "block";
    });
  }

  if (gameLvl === "extreme") {
    drawMap3();
    document.getElementById("time").style.display = "block";
    document.getElementById("outName").style.display = "block";
    document.getElementById("outName").innerHTML = `${name}`;
    document.getElementById("refresh").addEventListener("click", () => {
      table.innerHTML = "";
      drawMap3();
      document.getElementById("winm").style.display = "none";
      document.getElementById("outName").style.display = "block";
    });
  }
}
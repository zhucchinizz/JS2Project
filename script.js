function initial() {
  power = document.getElementById("pVal");
  pVar = 0;
  speed = document.getElementById("sVal");
  sVar = 0;
  structuralintegritiy = document.getElementById("siVal");
  siVar = 0;
  scanner = document.getElementById("scanVal");
  scanVal = "Off";
  defense = document.getElementById("defVal");
  defVal = "Off";
  type = document.getElementById("typeVal");
  typeVal = "No Power Installed";
  bots = document.getElementById("view");
  currentImg = "";
  p = 0;
  display();
}

function transform(image) {
  currentImg = image;
  display();
}

function add(String) {
  if (String == "p") {
    if (typeVal == "No Power Installed") {
      pVar = "Choose a power!";
      display();
      return;
    }
    pVar++;
    if (typeVal == "Solar" && pVar > 10) {
      pVar = 10;
    }
    if (typeVal == "Hydro" && pVar > 8) {
      pVar = 8;
    }
    if (typeVal == "Nuclear" && pVar > 12) {
      pVar = 12;
    }
  }
  if (String == "s") {
    if (typeVal == "No Power Installed") {
      sVar = "Choose a power!";
      display();
      return;
    }
    sVar++;
    if (typeVal == "Solar" && sVar > 10) {
      sVar = 10;
    }
    if (typeVal == "Hydro" && sVar > 12) {
      sVar = 12;
    }
    if (typeVal == "Nuclear" && sVar > 14) {
      sVar = 14;
    }
  }
  if (String == "si") {
    if (typeVal == "No Power Installed") {
      siVar = "Choose a power!";
      display();
      return;
    }
    siVar++;
    if (typeVal == "Solar" && siVar > 10) {
      siVar = 10;
    }
    if (typeVal == "Hydro" && siVar > 12) {
      siVar = 12;
    }
    if (typeVal == "Nuclear" && siVar > 4) {
      siVar = 4;
    }
  }
  display();
}

function sub(String) {
  if (String == "p") {
    if (typeVal == "No Power Installed") {
      pVar = "Choose a power!";
      display();
      return;
    }
    pVar--;
    if (pVar < 0) {
      pVar = 0;
    }
    if (typeVal == "Solar" && pVar > 10) {
      pVar = 10;
    }
    if (typeVal == "Hydro" && pVar > 8) {
      pVar = 8;
    }
    if (typeVal == "Nuclear" && pVar > 12) {
      pVar = 12;
    }
  }
  if (String == "s") {
    if (typeVal == "No Power Installed") {
      sVar = "Choose a power!";
      display();
      return;
    }
    sVar--;
    if (sVar < 0) {
      sVar = 0;
    }
    if (typeVal == "Solar" && sVar > 10) {
      sVar = 10;
    }
    if (typeVal == "Hydro" && sVar > 12) {
      sVar = 12;
    }
    if (typeVal == "Nuclear" && sVar > 14) {
      sVar = 14;
    }
  }
  if (String == "si") {
    if (typeVal == "No Power Installed") {
      siVar = "Choose a power!";
      display();
      return;
    }
    siVar--;
    if (siVar < 0) {
      siVar = 0;
    }
    if (typeVal == "Solar" && siVar > 10) {
      siVar = 10;
    }
    if (typeVal == "Hydro" && siVar > 12) {
      siVar = 12;
    }
    if (typeVal == "Nuclear" && siVar > 4) {
      siVar = 4;
    }
  }
  display();
}

function toggle(String) {
  if (String == "scanner") {
    if (typeVal == "No Power Installed") {
      scanVal = "Choose a power!";
      display();
      return;
    }
    if (scanVal == "Off") {
      scanVal = "On";
    }
    else {
      scanVal = "Off";
    }
    display();
  }
  if (String == "defensive") {
    if (typeVal == "No Power Installed") {
      defVal = "Choose a power!";
      display();
      return;
    }
    if (defVal == "Off") {
      defVal = "On";
    }
    else {
      defVal = "Off";
    }
    display();
  }
  if (String == "solar") {
    p++;
    if (p == 1) {
      pVar = 0;
      sVar = 0;
      siVar = 0;
      scanVal = "Off";
      defVal = "Off";
    }
    typeVal = "Solar";
    if (pVar > 10) {
      pVar = 10;
    }
    if (sVar > 10) {
      sVar = 10;
    }
    if (siVar > 10) {
      siVar = 10;
    }
  }
  if (String == "hydro") {
    p++;
    if (p == 1) {
      pVar = 0;
      sVar = 0;
      siVar = 0;
      scanVal = "Off";
      defVal = "Off";
    }
    typeVal = "Hydro";
    if (pVar > 8) {
      pVar = 8;
    }
    if (sVar > 12) {
      sVar = 12;
    }
    if (siVar > 10) {
      siVar = 10;
    }
  }
  if (String == "nuclear") {
    p++;
    if (p == 1) {
      pVar = 0;
      sVar = 0;
      siVar = 0;
      scanVal = "Off";
      defVal = "Off";
    }
    typeVal = "Nuclear";
    if (pVar > 12) {
      pVar = 12;
    }
    if (sVar > 14) {
      sVar = 14;
    }
    if (siVar > 4) {
      siVar = 4;
    }
  }
  display();
}

function display() {
  bots.src = currentImg;
  power.innerHTML = pVar;
  speed.innerHTML = sVar;
  structuralintegritiy.innerHTML = siVar;
  scanner.innerHTML = scanVal;
  defense.innerHTML = defVal;
  type.innerHTML = typeVal;
}

function finalize() {
  document.getElementById("body").style.display = "none";
}
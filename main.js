// Functionize Minecraft Fishing Start Code

// HTML Variables
var steveCharacter = document.getElementById("steve-img");
var alexCharacter = document.getElementById("alex-img");
var villagerCharacter = document.getElementById("villager-img");
var characterSlot = document.getElementById("slot");
var fishBtn = document.getElementById("fish-btn");
var fishImg = document.getElementById("result-img");
var codCounter = document.getElementById("num-cod");
var salmonCounter = document.getElementById("num-salmon");
var tropicalCounter = document.getElementById("num-tropical");
var pufferCounter = document.getElementById("num-puffer");
var plus5Btn = document.getElementById("plus-five");
var cod200Btn = document.getElementById("until-200");
var fishNumTimes = document.getElementById("num-in");
var fishInventory = document.getElementById("inventory");
var sortBtn = document.getElementById("sort-fish");

// Global Variables
characterSlot.innerHTML = "Steve";
var character = "Steve";
var codNum = 0;
var salmonNum = 0;
var tropNum = 0;
var puffNum = 0;

steveCharacter.addEventListener("click", selectSteve);

function selectSteve() {
  steveCharacter.classList.add("active");
  alexCharacter.classList.remove("active");
  villagerCharacter.classList.remove("active");

  character = "Steve";
  characterSlot.innerHTML = "Steve";
}

alexCharacter.addEventListener("click", selectAlex);

function selectAlex() {
  alexCharacter.classList.add("active");
  steveCharacter.classList.remove("active");
  villagerCharacter.classList.remove("active");

  character = "Alex";
  characterSlot.innerHTML = `Alex`;
}

villagerCharacter.addEventListener("click", selectVillager);

function selectVillager() {
  villagerCharacter.classList.add("active");
  steveCharacter.classList.remove("active");
  alexCharacter.classList.remove("active");

  character = "Villager";
  characterSlot.innerHTML = `Villager`;
}

// Fish Button Event Listener
fishBtn.addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character

  if (character === "Steve") {
    // Steve Fish Simulator
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.7) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
      fishInventory.innerHTML += `<img src = "img/Raw-Cod.png">`;
    } else if (randNum < 0.9) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
      fishInventory.innerHTML += `<img src = "img/Tropical-Fish.png">`;
    } else if (randNum < 0.95) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
      fishInventory.innerHTML += `<img src = "img/Tropical-Fish.png">`;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
      fishInventory.innerHTML += `<img src = "img/Pufferfish.png">`;
    }
  } else if (character === "Alex") {
    // Alex Fish Simulator
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.1) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
      fishInventory.innerHTML += `<img src = "img/Raw-Cod.png">`;
    } else if (randNum < 0.2) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
      fishInventory.innerHTML += `<img src = "img/Raw-Salmon.png">`;
    } else if (randNum < 0.5) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
      fishInventory.innerHTML += `<img src = "img/Tropical-Fish.png">`;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
      fishInventory.innerHTML += `<img src = "img/Pufferfish.png">`;
    }
  } else {
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.25) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
      fishInventory.innerHTML += `<img src = "img/Raw-Cod.png">`;
    } else if (randNum < 0.5) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
      fishInventory.innerHTML += `<img src = "img/Raw-Salmon.png">`;
    } else if (randNum < 0.75) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
      fishInventory.innerHTML += `<img src = "img/Tropical-Fish.png">`;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
      fishInventory.innerHTML += `<img src = "img/Pufferfish.png">`;
    }
  }
}

plus5Btn.addEventListener("click", plusFive);

function plusFive() {
  for (var n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

cod200Btn.addEventListener("click", until200Cod);

function until200Cod() {
  var codTarget = 200;
  var counter = 0;
  while (codNum < codTarget) {
    fishBtnClicked();
    counter++;
  }
  console.log(counter);
}

fishNumTimes.addEventListener("change", untilTarget);

function untilTarget() {
  var targetTimes = parseInt(fishNumTimes.value);

  for (var goal = 1; goal <= targetTimes; goal++) {
    fishBtnClicked();
  }
}

sortBtn.addEventListener("click", sortAllFish);

function sortAllFish() {
  fishInventory.innerHTML = "";

  for (var codTimes = 0; codTimes < codNum; codTimes++) {
    fishInventory.innerHTML += `<img src = "img/Raw-Cod.png">`;
  }

  for (var salmonTimes = 0; salmonTimes < salmonNum; salmonTimes++) {
    fishInventory.innerHTML += `<img src = "img/Raw-Salmon.png">`;
  }

  for (var tropTimes = 0; tropTimes < tropNum; tropTimes++) {
    fishInventory.innerHTML += `<img src = "img/Tropical-Fish.png">`;
  }

  for (var puffTimes = 0; puffTimes < puffNum; puffTimes++) {
    fishInventory.innerHTML += `<img src = "img/Pufferfish.png">`;
  }
}

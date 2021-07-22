// Declaring global variables
const body = document.getElementById('body');
const instructions = document.getElementById('instructions');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const switchChoiceYes = document.getElementById('btn-1');
const switchChoiceNo = document.getElementById('btn-2');
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const SwitchAndWin = document.getElementById("switchAndWin");
const SwitchAndLose = document.getElementById("switchAndLose");
const NoSwitchAndWin = document.getElementById("NoSwitchAndWin");
const NoSwitchAndLose = document.getElementById("NoSwitchAndLose");

// Image of Car
const winPath = "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956616/Monty%20Hall/photo-1489824904134-891ab64532f1_ymmigf.jpg";
// Image of Goat
const losePath = "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg";


var openDoor1, openDoor2, openDoor3, winner;

// Hiding unnecessary elements
row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;

// Function to randomly shuffle the doors
winDoorGenerator();
function winDoorGenerator() {
    winner = Math.floor(Math.random() * 3);
    if (winner === 1) {
        openDoor1 = winPath;
        openDoor2 = losePath;
        openDoor3 = losePath;
    } else if (winner === 2) {
        openDoor2 = winPath;
        openDoor1 = losePath;
        openDoor3 = losePath;
    } else {
        openDoor3 = winPath;
        openDoor2 = losePath;
        openDoor1 = losePath;
    }
}

// Event listener for door 1
doorImage1.onclick = () => {
    row1.hidden = true;
    d1.hidden = false;
    setTimeout(()=>{
        d1.hidden = true;
    },1000);
    setTimeout(()=>{
        row2.hidden = false;
    },1000);
    if (openDoor2 === losePath) {
        setTimeout(() => { doorImage2.src = openDoor2; }, 2000);

    } else if (openDoor3 === losePath) {
        setTimeout(() => { doorImage3.src = openDoor3; }, 2000);
    }
    switchChoiceYes.onclick = () => {
        if (doorImage2.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg"){
            row2.hidden = true;
            instructions.innerHTML = "You switched to door 3";
            setTimeout(()=>{
                instructions.innerHTML = "Revealing your chosen door......";
            },1000);
            setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
            if (openDoor3 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
        else if (doorImage3.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg") {
            row2.hidden = true;
            instructions.innerHTML = "You switched to door 2";
            setTimeout(()=>{
                instructions.innerHTML = "Revealing your chosen door......";
            },1000);
            setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
            if (openDoor2 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        row2.hidden = true;
        instructions.innerHTML = "Your choice is still door 1";
        setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
        if (openDoor1 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}
doorImage2.onclick = () => {
    row1.hidden = true;
    d2.hidden = false;
    setTimeout(() => { d2.hidden = true; }, 1000);
    setTimeout(() => { row2.hidden = false; }, 1000)

    if (openDoor1 === losePath) {
        setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

    } else if (openDoor3 === losePath) {
        setTimeout(() => { doorImage3.src = openDoor3; }, 2000);
    }

    switchChoiceYes.onclick = () => {
        if (doorImage1.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg") {
            row2.hidden = true;
            instructions.innerHTML = "You switched to door 3"
            setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
            if (openDoor3 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        } else if (doorImage3.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg") {
            row2.hidden = true;
            instructions.innerHTML = "You switched to door 1";
            setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
            if (openDoor1 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        row2.hidden = true;
        instructions.innerHTML = "Your choice is still door 2"
        setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
        if (openDoor2 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}
doorImage3.onclick = () => {
    row1.hidden = true;
    d3.hidden = false;
    setTimeout(() => { d3.hidden = true; }, 1000);
    setTimeout(() => { row2.hidden = false; }, 1000)

    if (openDoor1 === losePath) {
        setTimeout(() => { doorImage1.src = openDoor1; }, 2000);

    } else if (openDoor2 === losePath) {
        setTimeout(() => { doorImage2.src = openDoor2; }, 2000);
    }

    switchChoiceYes.onclick = () => {
        if (doorImage1.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg") {
            row2.hidden = true;
            instructions.innerHTML = "You switched to door2"
            setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage2.src = openDoor2; }, 2500);
            if (openDoor2 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        } else if (doorImage2.src === "https://res.cloudinary.com/dlfc9lth5/image/upload/v1626956789/Monty%20Hall/photo-1559203544-e4b02d061343_taeo8k.jpg") {
            row2.hidden = true;
            instructions.innerHTML = "You switched to door1"
            setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
            setTimeout(() => { doorImage1.src = openDoor1; }, 2500);
            if (openDoor1 === losePath) {
                setTimeout(() => { switchAndLose(); }, 3500)
            } else {
                setTimeout(() => { switchAndWin(); }, 3500)
            }
        }
    }
    switchChoiceNo.onclick = () => {
        row2.hidden = true;
        instructions.innerHTML = "Your choice is still door3"
        setTimeout(() => { instructions.innerHTML = "Revealing your chosen door......"; }, 1000);
        setTimeout(() => { doorImage3.src = openDoor3; }, 2500);
        if (openDoor3 === losePath) {
            setTimeout(() => { noSwitchAndLose(); }, 3500)
        } else {
            setTimeout(() => { noSwitchAndWin(); }, 3500)
        }
    }
}
const switchAndWin = () => {
    body.hidden = true;
    SwitchAndWin.hidden = false;
}
const switchAndLose = () => {
    body.hidden = true;
    SwitchAndLose.hidden = false;
}
const noSwitchAndWin = () => {
    body.hidden = true;
    NoSwitchAndWin.hidden = false;
}
const noSwitchAndLose = () => {
    body.hidden = true;
    NoSwitchAndLose.hidden = false;
}
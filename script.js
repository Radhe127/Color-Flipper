const colourDisplaySection = document.getElementById("colour-display");
const newColourBtnElement = document.getElementById("new-colour-button");
const currentColourElement = document.getElementById("current-colour");

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


function getRandomHexVlaue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPosition];
    return randomHexValue;
}

function getRandomHexString(stringLength){
    let hexString = '';
    for( let i = 0; i < stringLength; i++){
        hexString += getRandomHexVlaue();
    }
    return hexString;
}



newColourBtnElement.addEventListener("click",function(){
    const randomHexString = '#' + getRandomHexString(6);
    document.body.style.setProperty('background-color', randomHexString);
    currentColourElement.textContent = randomHexString;
    colourDisplaySection.style.borderColor = randomHexString;
});
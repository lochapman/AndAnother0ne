let resultInfo = document.getElementById('infoHere');
let entryOne = document.getElementById('entryOne');
let entryTwo = document.getElementById('entryTwo');
let entryThree = document.getElementById('entryThree');
let inputThree = '';
inputFour.addEventListener('click',passcode()
)

function passcode (event) {
 inputThree= inputThree + event.key
    if (inputThree.length > 8) {
    entryThree.classList.add('show')
 }
}

var key1 = localStorage.getItem('key1') === 'false';
var key2 = localStorage.getItem('key2') === 'false';
var key3 = localStorage.getItem('key3') === 'false';
var key4 = localStorage.getItem('key4') === 'false';
var key5 = localStorage.getItem('key5') === 'false';
var key6 = localStorage.getItem('key6') === 'false';

function appear1() {
    localStorage.setItem('key1', 'true'); // Update localStorage
    updateDisplay();
}
function appear2() {
    localStorage.setItem('key2', 'true'); // Update localStorage
    updateDisplay();
}
function appear3() {
    localStorage.setItem('key3', 'true'); // Update localStorage
    updateDisplay();
}
function appear4() {
    localStorage.setItem('key4', 'true'); // Update localStorage
    updateDisplay();
}
function appear5() {
    localStorage.setItem('key5', 'true'); // Update localStorage
    updateDisplay();
}
function appear6() {
    localStorage.setItem('key6', 'true'); // Update localStorage
    updateDisplay();
}

function disappearAll() {
   localStorage.setItem('key1', 'false')
   localStorage.setItem('key2', 'false')
   localStorage.setItem('key3', 'false')
   localStorage.setItem('key4', 'false')
   localStorage.setItem('key5', 'false')
   localStorage.setItem('key6', 'false')
   updateDisplay();
}
function appearAll() {
    localStorage.setItem('key1', 'true')
    localStorage.setItem('key2', 'true')
    localStorage.setItem('key3', 'true')
    localStorage.setItem('key4', 'true')
    localStorage.setItem('key5', 'true')
    localStorage.setItem('key6', 'true')
    updateDisplay();
}
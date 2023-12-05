var key1 = localStorage.getItem('key1') === 'true';
var key2 = localStorage.getItem('key2') === 'true';
var key3 = localStorage.getItem('key3') === 'true';
var key4 = localStorage.getItem('key4') === 'true';
var key5 = localStorage.getItem('key5') === 'true';

function appear1() {
    key1 = true;
    updateDisplay();
}
function appear2() {
    key2 = true;
    updateDisplay();
}
function appear3() {
    key3 = true;
    updateDisplay();
}
function appear4() {
    key4 = true;
    updateDisplay();
}
function appear5() {
    key5 = true;
    updateDisplay();
}

function disappear() {
    key1 = false;
    key2 = false;
    key3 = false;
    key4 = false;
    key5 = false;
    updateDisplay();
}

function updateDisplay() {
    localStorage.setItem('key1', key1.toString()); // Update localStorage
    var pic = document.getElementById('Endings1');
    pic.style.display = key1 ? 'block' : 'none';
}

// Call updateDisplay on page load to initialize the display
updateDisplay();
var key1 = localStorage.getItem('key1') === 'false';
var key2 = localStorage.getItem('key2') === 'false';
var key3 = localStorage.getItem('key3') === 'false';
var key4 = localStorage.getItem('key4') === 'false';
var key5 = localStorage.getItem('key5') === 'false';
var key6 = localStorage.getItem('key6') === 'false';

var quiz1 = localStorage.getItem('quiz1') === 'false';
var quiz2 = localStorage.getItem('quiz2') === 'false';
var quiz3 = localStorage.getItem('quiz3') === 'false';
var quiz4 = localStorage.getItem('quiz4') === 'false';
var quiz5 = localStorage.getItem('quiz5') === 'false';

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

function quiz1Pass(){
    localStorage.setItem('quiz1', 'true'); // Update localStorage
}
function quiz2Pass(){
    localStorage.setItem('quiz2', 'true'); // Update localStorage
}
function quiz3Pass(){
    localStorage.setItem('quiz3', 'true'); // Update localStorage
}
function quiz4Pass(){
    localStorage.setItem('quiz4', 'true'); // Update localStorage
}
function quiz5Pass(){
    localStorage.setItem('quiz5', 'true'); // Update localStorage
}

function quiz1Fail(){
    localStorage.setItem('quiz1', 'false'); // Update localStorage
}
function quiz2Fail(){
    localStorage.setItem('quiz2', 'false'); // Update localStorage
}
function quiz3Fail(){
    localStorage.setItem('quiz3', 'false'); // Update localStorage
}
function quiz4Fail(){
    localStorage.setItem('quiz4', 'false'); // Update localStorage
}
function quiz5Fail(){
    localStorage.setItem('quiz5', 'false'); // Update localStorage
}

function submitAnswers(){
    if(localStorage.getItem('quiz1')==='true'){
        if(localStorage.getItem('quiz2')==='true'){
            if(localStorage.getItem('quiz3')==='true'){
                if(localStorage.getItem('quiz4')==='true'){
                    if(localStorage.getItem('quiz5')==='true'){
                        window.location.assign("pass.html");
                        exit;
                    }
                }
            }
        }
    }
    window.location.assign("fail.html");
}
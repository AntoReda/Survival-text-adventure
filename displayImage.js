var key1 = localStorage.getItem('key1');
var key2 = localStorage.getItem('key2');
var key3 = localStorage.getItem('key3');
var key4 = localStorage.getItem('key4');
var key5 = localStorage.getItem('key5');
var key6 = localStorage.getItem('key6');

var pic1 = document.getElementById('Endings1');
var pic2 = document.getElementById('Endings2');
var pic3 = document.getElementById('Endings3');
var pic4 = document.getElementById('Endings4');
var pic5 = document.getElementById('Endings5');
var pic6 = document.getElementById('Endings6');

function updateDisplay(){

    if(localStorage.getItem("key1") === 'true')
    {
        pic1.style.display = 'inline';
    }
    if(localStorage.getItem("key2") === 'true')
    {
        pic2.style.display = 'inline';
    }
    if(localStorage.getItem("key3") === 'true')
    {
        pic3.style.display = 'inline';
    }
    if(localStorage.getItem("key4") === 'true')
    {
        pic4.style.display = 'inline';
    }
    if(localStorage.getItem("key5") === 'true')
    {
        pic5.style.display = 'inline';
    }
    if(localStorage.getItem("key6") === 'true')
    {
        pic6.style.display = 'inline';
    }
    
}
//Launch an instance of the function.
updateDisplay()

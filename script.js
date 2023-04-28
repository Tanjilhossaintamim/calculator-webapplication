document.getElementById('h1').style.color = '#ffa600ab';
document.getElementById('h1').style.textAlign = 'center';
document.getElementById('h1').innerText = 0;
document.getElementById('text').style.textAlign = 'center';
document.getElementById('text1').style.textAlign = 'center';
document.getElementById('text').value = 0;
document.getElementById('text1').value = 0;
document.getElementById('text').addEventListener('focusin', focusin);
document.getElementById('text1').addEventListener('focusin', focusin1);

function focusin() {
    document.getElementById('text').value = '';

}
function focusin1() {
    document.getElementById('text1').value = '';

}
function add() {
    let int = parseInt(document.getElementById('text').value);
    let int1 = parseInt(document.getElementById('text1').value);
    document.getElementById('h1').style.color = '#ffa600ab';


    return document.getElementById('h1').innerText = int + int1;

}
function sub() {
    let int = parseInt(document.getElementById('text').value);
    let int1 = parseInt(document.getElementById('text1').value);
    document.getElementById('h1').style.color = '#ffa600ab';

    return document.getElementById('h1').innerText = int - int1;


}
function mul() {
    let int = parseInt(document.getElementById('text').value);
    let int1 = parseInt(document.getElementById('text1').value);
    document.getElementById('h1').style.color = '#ffa600ab';

    return document.getElementById('h1').innerText = int * int1;


}
function division() {
    let int = parseInt(document.getElementById('text').value);
    let int1 = parseInt(document.getElementById('text1').value);
    document.getElementById('h1').style.color = '#ffa600ab';
    if (int1 === 0 && int > 0) {
        document.getElementById('h1').style.color = 'red';
        return document.getElementById('h1').innerText = 'Error';
    }

    return document.getElementById('h1').innerText = int / int1;


}
function reminder() {
    let int = parseInt(document.getElementById('text').value);
    let int1 = parseInt(document.getElementById('text1').value);
    document.getElementById('h1').style.color = '#ffa600ab';
    if (int > 0 && int1 == 0) {
        document.getElementById('h1').style.color = 'red';
        return document.getElementById('h1').innerText = 'Error';
    }

    return document.getElementById('h1').innerText = int % int1;


}


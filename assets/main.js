const Plus = document.getElementById('plus');
const Subtract = document.getElementById('subtract');
const Reset = document.getElementById('reset');
const Output = document.getElementById('output');

let count = 0;

function displayOutput() {
    if (count > 0) {
        Output.style.color = 'green';
    }
    else if (count < 0) {
        Output.style.color = 'red';
    } else {
        Output.style.color = 'black';
    }
    Output.textContent = count;
}

Plus.addEventListener('click', function() {
    count ++;
    displayOutput();
})

Subtract.addEventListener('click', function() {
    count --;
    displayOutput();
})

Reset.addEventListener('click', function() {
    count = 0;
    displayOutput();
})
 

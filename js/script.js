const display = document.getElementById('display');

function numValue(value) {
    // Prevent multiple decimals in a number
    if (value === '.' && display.value.split(/[\+\-\*\/]/).pop().includes('.')) return;
    display.value += value;
}

function numTotal() {
    if(display.value.trim()=== "")return;

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function numClear() {
    display.value = "";
}

function numDel() {
    display.value = display.value.slice(0, -1);
}
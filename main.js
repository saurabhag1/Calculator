// let btn1 = document.getElementsByClassName('button');
// let btn2 = document.getElementsByClassName('button2');
// let btn3 = document.getElementsByClassName('button3');
// let btn4 = document.getElementsByClassName('button4');
// let val1 = document.getElementsByClassName('button').value;
let displayScreen = document.getElementById('displayScreen');
let currentScreenValue = '';

function display(value) {
    currentScreenValue += value;
    displayScreen.value = currentScreenValue;
};

function delFunction() {
    currentScreenValue = currentScreenValue.slice(0, -1);
    displayScreen.value = currentScreenValue;
};

function resetFunction() {
    currentScreenValue = '';
    displayScreen.value = currentScreenValue;
}



function equalsFunction() {
    if (currentScreenValue.includes('x')) {
        currentScreenValue = math.evaluate(multiplication());
    } else {
        currentScreenValue = math.evaluate(currentScreenValue);
    }
    if (typeof currentScreenValue === 'number') {
        if (Number.isInteger(currentScreenValue)) {
            displayScreen.value = currentScreenValue;
        } else {
            displayScreen.value = currentScreenValue.toPrecision(2);
        }

    } else {
        displayScreen.value = "Error...";
    }
}

const multiplication = () => {
    let mul = (currentScreenValue.split('x').join('*'));
    return mul;
}
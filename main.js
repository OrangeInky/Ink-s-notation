var result = [];
var answer = 0;
var laste = result[result.length-1]
var repeatfac = result.length;

function update() {
    document.getElementById('1').innerHTML = result;
    document.getElementById('2').innerHTML = answer;
}

function remove() {
    result.pop();
    return result;
}

function Calculate() {
    getlastelement();
    getrepeatfac();
    var factor = answer + 2;
    if (laste > 0) {
        laste -= 1;
        remove();
        while (factor> 0) {
            result.push(laste)
            factor--;
        }
    }
    if (laste === 0) {
        answer += 1;
        remove();
    }
    update();
}

function expand(x,y,z) {
    result = [x]
    answer = z;
    while (y > 1) {
        result.push(x);  
        y--;      
    }
    update();
}

function expands(x,y,z) {
    reset();
    expand(x,y,z);
    update();
}

function call() {
    getlastelement();
    getrepeatfac();
    console.log(laste);
    console.log(repeatfac);
}

function getlastelement() {
    return laste = result[result.length-1];
}

function getrepeatfac() {
    return repeatfac = result.length;
}

function repeaterrepeater(x) {
    while(x>0) {
        x--;
        betterrepeater();
    }
}

function betterrepeater() {
    repeater(1+answer);
}

function repeater(y) {
    while(y > 0 ) {
        y--;
        Calculate();
    }
}

function reset() {
    result = [];
    answer = 0;
    update();
}
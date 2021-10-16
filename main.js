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

function Start(x) {
    reset()
    expands(x,x,x);
    update();
}

function run() {
    var x = parseInt(document.getElementById('foobar').value, 10);
    Start(x);
}
function run2() {
    var x = parseInt(document.getElementById('foobar2').value, 10);
    repeater(x);
}

function run3() {
    var x = parseInt(document.getElementById('X').value, 10);
    var y = parseInt(document.getElementById('Y').value, 10);
    var z = parseInt(document.getElementById('Z').value, 10);
    expands(x,y,z);
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

var counts = {};
var myobj = JSON.stringify(counts);

function count(){
    counts = {};
    result.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    getmyobj()
console.log(myobj)
document.getElementById('Counts').innerHTML = myobj;
}

function getmyobj() {
    myobj = JSON.stringify(counts)
}
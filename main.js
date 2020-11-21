// Main game values.
var number = new Decimal(1);
var multiplier1 = new Decimal(1);
var TotalAmount = new Decimal(1);
var multiplier2 = new Decimal(0.000075);
var multiplier3 = new Decimal(0.9999999875);
var IP = new Decimal(0);
var OldIP = new Decimal(0);

// Multiplies the number every tick.
function multiply() {
    number = number.times(multiplier1);
    TotalAmount = TotalAmount.times(multiplier1);
    document.getElementById('number').innerHTML = "Number: " + notate(number);
    document.getElementById('TotalNumber').innerHTML = "Total Received: " + notate(TotalAmount);
    document.getElementById('multiplier').innerHTML = "(x" + notate2((Decimal.pow(multiplier1, 25))) + "/s)";
}

// This had to be added or the game would be unbalanced.
multiplier2 = (multiplier2.add(1));

// Multiplies the multiplier1 value, which that variable multiplies the main number value.
function upgrade1() {
    multiplier1 = multiplier1.times(multiplier2);
	multiplier2 = multiplier2.times(multiplier3);
    document.getElementById('number').innerHTML = `Number: ${notate(number)}`;
    document.getElementById('multiplier').innerHTML = "(x" + notate2((Decimal.pow(multiplier1, 25))) + "/s)";
	document.getElementById('IPamount').innerHTML = "You have " + OldIP + " Infinity Points";
	document.getElementById('IP').innerHTML = "Earn " + Math.floor(number.log(1e50)) + " Infinity Points";
}

// Click to earn more Infinity Points.
function EarnIP() {
	IP = Math.floor(number.log(1e50));
	OldIP = OldIP.add(IP);
	number = new Decimal(1);
	multiplier1 = new Decimal(1);
	multiplier2 = (new Decimal(0.00025).times(OldIP).add(1));
	multiplier3 = new Decimal(1).sub(multiplier2.dividedBy(100000000));
	document.getElementById('IPamount').innerHTML = "You have " + notate(OldIP.sub(2)) + " Infinity Points"
	document.getElementById('IP').innerHTML = "Prestige and you'll have " + notate(Math.floor(number.log(1e50))) + " Infinity Points";
}
	
// This notates both values in HTML.	
function notate(n) {
    var m = n.mantissa;
    var e = n.exponent.toLocaleString("pt-BR");
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3);
    return `${m.toPrecision(3)}e${e}`;
}

function notate2(n) {
    var m = n.mantissa;
    var e = n.exponent.toLocaleString("pt-BR");
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3);
    return `${m.toPrecision(2)}e${e}`;
}

// Automation at the start of the game!

var mainGameLoop = window.setInterval(function () {
    multiply()
}, 50);

var mainGameLoop = window.setInterval(function () {
    upgrade1()
}, 25);

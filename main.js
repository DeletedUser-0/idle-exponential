// Main game values.
var number = new Decimal(1);
var multiplier1 = new Decimal(1);
var TotalAmount = new Decimal(1);
var multiplier2 = new Decimal(0.00000000000001);
var IP = new Decimal(1);
var OldIP = new Decimal(1);
var MultiplierEffect1 = new Decimal(1);

// Multiplies the number every tick.
function multiply() {
    number = number.times(multiplier1);
    TotalAmount = TotalAmount.times(multiplier1);
    document.getElementById('number').innerHTML = "Number: " + notate(number);
    document.getElementById('TotalNumber').innerHTML = "Total Received: " + notate(TotalAmount);
    document.getElementById('multiplier').innerHTML = "(x" + notate3((Decimal.pow(multiplier1, 25))) + "/s)";
}

multiplier1 = multiplier1.add(1);

// Multiplies the multiplier1 value, which that variable multiplies the main number value.
function upgrade1() {
    multiplier1 = MultiplierEffect1.divide(1.45).times(multiplier1.log(2)).add(1.0000001);
    document.getElementById('number').innerHTML = `Number: ${notate(number)}`;
    document.getElementById('multiplier').innerHTML = "(x" + notate3((Decimal.pow(multiplier1, 25))) + "/s)";
	document.getElementById('IPamount').innerHTML = "You have " + notate(OldIP) + " Infinity Points";
}

// Click to earn more Infinity Points.
function EarnIP() {
	IP = IP.times(1.0015);
	OldIP = IP;
	MultiplierEffect1 = OldIP.pow(0.01);
	multiplier2 = (new Decimal(0.000025).times(MultiplierEffect1));
	document.getElementById('IPamount').innerHTML = "You have " + notate(OldIP) + " Infinity Points";
}
	
// This notates both values in HTML.	
function notate(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3);
    return `${m.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

function notate2(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 4) return (m * Math.pow(10, e.toLocaleString("pt-BR"))).toPrecision(3);
    return `${m.toPrecision(2)}e${e.toLocaleString("pt-BR")}`;
}

function notate3(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e.toLocaleString("pt-BR"))).toPrecision(6);
    return `${m.toPrecision(2)}e${e.toLocaleString("pt-BR")}`;
}

// Automation at the start of the game!

var mainGameLoop = window.setInterval(function () {
    multiply()
}, 50);

var mainGameLoop = window.setInterval(function () {
    upgrade1()
}, 25);

var mainGameLoop = window.setInterval(function () {
    EarnIP()
}, 333.3333333333333333333);

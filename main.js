var number = new Decimal(1);
var multiplier1 = new Decimal(1);
var TotalAmount = new Decimal(1);
var multiplier2 = new Decimal(0.00025);
var multiplier3 = new Decimal(0.99999995);
var IP = new Decimal(2);


function multiply() {
    number = number.times(multiplier1);
    TotalAmount = TotalAmount.times(multiplier1);
    document.getElementById('number').innerHTML = "Number: " + notate(number);
    document.getElementById('TotalNumber').innerHTML = "Total Received: " + notate(TotalAmount);
    document.getElementById('multiplier').innerHTML = "Multiplier per second: " + notate2((Decimal.pow(multiplier1, 10))) + "x";
}

multiplier2 = (multiplier2.add(1))

function upgrade1() {
    multiplier1 = multiplier1.times(multiplier2);
	multiplier2 = multiplier2.times(multiplier3);
	IP = Math.floor(number.log(1e90));
    document.getElementById('number').innerHTML = `Number: ${notate(number)}`;
    document.getElementById('multiplier').innerHTML = "Multiplier per second: " + notate2((Decimal.pow(multiplier1, 10))) + "x";
	document.getElementById('IP').innerHTML = "Prestige to get " + (IP) + " IP";
}

function EarnIP() {
		number = new Decimal(1);
		multiplier1 = new Decimal(1);
		multiplier2 = (new Decimal(0.00025).times(IP).add(1));
		multiplier3 = new Decimal(0.99999995).sub(0.0000005);
		document.getElementById('IPamount').innerHTML = "You have " + IP + " IP"
}

	
	
function notate(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3)
    return `${m.toPrecision(3)}e${e}`;
}

function notate2(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3)
    return `${m.toPrecision(2)}e${e}`;
}

var mainGameLoop = window.setInterval(function () {
    multiply()
}, 100)

var mainGameLoop = window.setInterval(function () {
    upgrade1()
}, 25)

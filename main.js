// Main game values.
var number = new Decimal(1);
var multiplier1 = new Decimal(1);
var multiplier2 = new Decimal(0.00000000000001);
var IP = new Decimal(1);
var OldIP = new Decimal(1);
var MultiplierEffect1 = new Decimal(1);
var Upgrade1Cost = new Decimal(1e6);
var Upgrade1Level = new Decimal(0);
var BaseEffect1 = new Decimal(0.0125);

// Multiplies the number every tick.
function multiply() {
    number = number.times(multiplier1);
    document.getElementById('number').innerHTML = "Number: " + notate(number);
    document.getElementById('multiplier').innerHTML = "(x" + notate3((Decimal.pow(multiplier1, 20))) + "/s)";
}

multiplier1 = multiplier1.add(1);

// Multiplies the multiplier1 value, which that variable multiplies the main number value.
function upgrade1() {
    multiplier1 = MultiplierEffect1.divide(1.45).times(multiplier1.log(2)).add(1.0000001);
    document.getElementById('number').innerHTML = `Number: ${notate(number)}`;
    document.getElementById('multiplier').innerHTML = "(x" + notate3((Decimal.pow(multiplier1, 20))) + "/s)";
	document.getElementById('IPamount').innerHTML = "You have " + notate(OldIP) + " Infinity Points";
}

// Click to earn more Infinity Points.
function EarnIP() {
	IP = IP.times(1.003);
	OldIP = IP;
	MultiplierEffect1 = OldIP.pow(BaseEffect1);
	multiplier2 = (new Decimal(0.00002).times(MultiplierEffect1));
	document.getElementById('IPamount').innerHTML = "You have " + notate(OldIP) + " Infinity Points";
}

function IncreaseMultiplier1() {
	if (number.mantissa >= Upgrade1Cost.mantissa && number.exponent >= Upgrade1Cost.exponent ) {
		BaseEffect1 = BaseEffect1.times(1.04);
		Upgrade1Cost = Upgrade1Cost.pow(1.35);
		Upgrade1Level = Upgrade1Level.add(1);
		document.getElementById('number').innerHTML = "Number: " + notate(number);
		document.getElementById('multiplier').innerHTML = "(x" + notate3((Decimal.pow(multiplier1, 20))) + "/s)";
		document.getElementById('Upgrade1').innerHTML = "Increase Multiplier per second. <br> Cost: " + notate(Upgrade1Cost) + "<br> Level: " + notate4(Upgrade1Level);
	}
};
	
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
    if (e < 4) return (m * Math.pow(10, e)).toPrecision(3);
    return `${m.toPrecision(2)}e${e.toLocaleString("pt-BR")}`;
}

function notate3(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(3);
    return `${m.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

function notate4(n) {
    var m = n.mantissa;
    var e = n.exponent;
    if (e < 3) return (m * Math.pow(10, e)).toPrecision(1);
    return `${m.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
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
}, 500);

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

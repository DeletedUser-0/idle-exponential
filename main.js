// Main game values.
var save = {
	number: new Decimal(0.5),
	multiplier1: new Decimal(1.0000005),
	multiplier2: new Decimal(0.00000000000001),
	IP: new Decimal(0.000001),
	OldIP: new Decimal(0.000001),
	MultiplierEffect1: new Decimal(0.000001),
	Upgrade1Cost: new Decimal(100),
	Upgrade1Level: new Decimal(0),
	BaseEffect1: new Decimal(0.0001),
	CostEffect1: new Decimal(2),
	IPmultiplier: new Decimal(1),
	Upgrade2Cost: new Decimal(1e50),
	Upgrade2Level: new Decimal(0),
	CostEffect2: new Decimal(25),
	BaseEffect3: new Decimal(1.4),
	BaseEffect4: new Decimal(2.5),
	BaseEffect5: new Decimal(1.0001),
}


// Multiplies the number every tick.
function multiply() {
	save.number = Decimal.times(save.number, save.multiplier1);
}

save.multiplier1 = Decimal.add(save.multiplier1, 1);

// Click to earn more Infinity Points.
function EarnIP() {
	save.IP = Decimal.times(save.IP, save.IPmultiplier);
	save.OldIP = save.IP;
	save.MultiplierEffect1 = Decimal.add(save.MultiplierEffect1, save.OldIP);
	save.multiplier2 = Decimal.times(0.0000003, save.MultiplierEffect1).pow(0.1);
	save.BaseEffect5 = Decimal.times(save.BaseEffect5, 1.00002);
	save.IPmultiplier = Decimal.times(save.IPmultiplier, save.BaseEffect5).pow(0.1);
	document.getElementById('IPamount').innerHTML = "You have " + notate(Decimal.times(save.OldIP, 1000000)) + " Infinity Points (x" + notate(save.IPmultiplier) + " per tick)";
	document.getElementById('number').innerHTML = "Number: " + notate(save.number);
}

function IncreaseMultiplier1() {
	if (save.number.mantissa >= save.Upgrade1Cost.mantissa && save.number.exponent >= save.Upgrade1Cost.exponent) {
		save.BaseEffect3 = Decimal.times(save.BaseEffect3, 0.7);
		save.BaseEffect4 = Decimal.add(save.BaseEffect3, 1.1);
		save.BaseEffect1 = Decimal.times(save.BaseEffect1, save.BaseEffect4);
		save.BaseEffect5 = Decimal.times(save.BaseEffect5, 1.0001);
		save.number = Decimal.divide(save.number, save.Upgrade1Cost);
		save.CostEffect1 = Decimal.pow(save.CostEffect1, 1.1);
		save.Upgrade1Cost = Decimal.pow(10, Math.round(save.CostEffect1));
		save.Upgrade1Level = Decimal.add(save.Upgrade1Level, 1);
		document.getElementById('number').innerHTML = "Number: " + notate(save.number);
		document.getElementById('Upgrade1').innerHTML = "Increase Multiplier per second.<br>Increases IP gain by a fraction. <br> <br> Cost: " + notate(save.Upgrade1Cost) + "<br> Level: " + save.Upgrade1Level;
	};
};

function IncreaseIP1() {
	if (save.number.mantissa >= save.Upgrade2Cost.mantissa && save.number.exponent >= save.Upgrade2Cost.exponent) {
		save.BaseEffect5 = Decimal.times(save.BaseEffect5, 1.00025);
		save.number = Decimal.divide(save.number, save.Upgrade2Cost);
		save.CostEffect2 = Decimal.pow(save.CostEffect2, 1.16);
		save.Upgrade2Cost = Decimal.pow(10, Math.round(save.CostEffect2));
		save.Upgrade2Level = Decimal.add(save.Upgrade2Level, 1);
		document.getElementById('number').innerHTML = "Number: " + notate(save.number);
		document.getElementById('Upgrade2').innerHTML = "Increase IP multiplier per tick. <br> Cost: " + notate(save.Upgrade2Cost) + " (Number) <br> Level: " + notate(save.Upgrade2Level);
	};
};


// This notates both values in HTML.	

function notate(n) {
    var e = n.exponent;
    if (e < 3) return (n.mantissa * Math.pow(10, e)).toPrecision(3);
    return `${n.mantissa.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

// Automation at the start of the game!

var mainGameLoop = window.setInterval(function () {
    multiply()
}, 25);

var mainGameLoop = window.setInterval(function () {
    upgrade1()
}, 25);

var mainGameLoop = window.setInterval(function () {
    EarnIP()
}, 100);

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

function upgrade1() {
	save.multiplier1 = Decimal.divide(save.MultiplierEffect1, 1.49).times(Decimal.log(2, save.multiplier1)).add(1.00003);
}

function saveGame() {
	saveData = save;
	localStorage.saveData = JSON.stringify(saveData);
}

function loadGame() {
    var saveData = JSON.parse(localStorage.saveData || null) || {};
    saveData.BaseEffect1 = new Decimal(JSON.parse(saveData.BaseEffect1));
    saveData.BaseEffect3 = new Decimal(JSON.parse(saveData.BaseEffect3));
    saveData.BaseEffect4 = new Decimal(JSON.parse(saveData.BaseEffect4));
    saveData.CostEffect1 = new Decimal(JSON.parse(saveData.CostEffect1));
    saveData.CostEffect2 = new Decimal(JSON.parse(saveData.CostEffect2));
    saveData.Upgrade1Cost = new Decimal(JSON.parse(saveData.Upgrade1Cost));
    saveData.Upgrade1Level = new Decimal(JSON.parse(saveData.Upgrade1Level));
    saveData.Upgrade2Cost = new Decimal(JSON.parse(saveData.Upgrade2Cost));
    saveData.Upgrade2Level = new Decimal(JSON.parse(saveData.Upgrade2Level));
    save = saveData;
    return saveData.obj || "default";
}

//----VARIABLES--------//
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");

let total = document.getElementById("total");

var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2");
var plus3 = document.getElementById("plus3");
var minus1 = document.getElementById("minus1");
var minus2 = document.getElementById("minus2");
var minus3 = document.getElementById("minus3");
var trash1 = document.getElementById("trash1");
var trash2 = document.getElementById("trash2");
var trash3 = document.getElementById("trash3");
var unitPricer1 = document.getElementById("unitPrice1");
var unitPricer2 = document.getElementById("unitPrice2");
var unitPricer3 = document.getElementById("unitPrice3");

let count1 = 0;
let unitPrice1 = 100;
let counter1 = document.getElementById("quantity1");

let count2 = 0;
let unitPrice2 = 20;
let counter2 = document.getElementById("quantity2");

let count3 = 0;
let unitPrice3 = 50;
let counter3 = document.getElementById("quantity3");

total.innerHTML =
  parseInt(`${unitPrice1}`) -
  100 +
  (parseInt(`${unitPrice2}`) - 20) +
  (parseInt(`${unitPrice3}`) - 50) +
  "$";

totalAmount = total.innerHTML;

//----HEART BUTTON------//

heart1.onclick = function () {
  if (heart1.style.color != "red") {
    heart1.style.color = "red";
  } else {
    heart1.style.color = "black";
  }
};

heart2.onclick = function () {
  if (heart2.style.color != "red") {
    heart2.style.color = "red";
  } else {
    heart2.style.color = "black";
  }
};

heart3.onclick = function () {
  if (heart3.style.color != "red") {
    heart3.style.color = "red";
  } else {
    heart3.style.color = "black";
  }
};

//-----PLUS AND MINUS BUTTON-----//

//-----1st CARD

plus1.onclick = function () {
  //Add 1
  count1 += 1;
  counter1.innerHTML = count1;
  var unit = (unitPrice1 += 100);
  let number = parseInt(unit);
  var newPrice1 = number - 100;
  unitPricer1.innerHTML = `${newPrice1} $`;
  //   Total
  total.innerHTML =
    parseInt(`${unitPrice1}`) -
    100 +
    (parseInt(`${unitPrice2}`) - 20) +
    (parseInt(`${unitPrice3}`) - 50) +
    "$";
};

trash1.onclick = function () {
  //trash 1
  count1 = 0;
  counter1.innerHTML = count1;
  unitPrice1 = 100;
  unitPricer1.innerHTML = `${unitPrice1} $`;
  total.innerHTML =
    parseInt(`${unitPrice2}`) - 20 + (parseInt(`${unitPrice3}`) - 50) + "$";
};

minus1.onclick = function () {
  //Remove 1
  if (count1 > 0) {
    count1--;
    counter1.innerHTML = count1;
  }
  if (unitPrice1 > 100) {
    var unit = (unitPrice1 -= 100);
    let newPrice1 = parseInt(unit) - 100;
    unitPricer1.innerHTML = `${newPrice1} $`;
    //   Total
    total.innerHTML =
      parseInt(`${unitPrice1}`) -
      100 +
      (parseInt(`${unitPrice2}`) - 20) +
      (parseInt(`${unitPrice3}`) - 50) +
      "$";
  } else {
    unitPrice1 = 100;
    unitPricer1.innerHTML = `${unitPrice1} $`;
  }
};

//-----2nd CARD

plus2.onclick = function () {
  //Add 2
  count2 += 1;
  counter2.innerHTML = count2;
  var unit = (unitPrice2 += 20);
  let number = parseInt(unit);
  var newPrice2 = number - 20;
  unitPricer2.innerHTML = `${newPrice2} $`;
  //   Total
  total.innerHTML =
    parseInt(`${unitPrice1}`) -
    100 +
    (parseInt(`${unitPrice2}`) - 20) +
    (parseInt(`${unitPrice3}`) - 50) +
    "$";
};

trash2.onclick = function () {
  //trash 2
  count2 = 0;
  counter2.innerHTML = count2;
  unitPrice2 = 20;
  unitPricer2.innerHTML = `${unitPrice2} $`;
  total.innerHTML =
    parseInt(`${unitPrice1}`) - 100 + (parseInt(`${unitPrice3}`) - 50) + "$";
};

minus2.onclick = function () {
  //Remove 2
  if (count2 > 0) {
    count2--;
    counter2.innerHTML = count2;
  }
  if (unitPrice2 > 20) {
    var unit = (unitPrice2 -= 20);
    let newPrice2 = parseInt(unit) - 20;
    unitPricer2.innerHTML = `${newPrice2} $`;
    //   Total
    total.innerHTML =
      parseInt(`${unitPrice1}`) -
      100 +
      (parseInt(`${unitPrice2}`) - 20) +
      (parseInt(`${unitPrice3}`) - 50) +
      "$";
  } else {
    unitPrice2 = 20;
    unitPricer2.innerHTML = `${unitPrice2} $`;
  }
};

//-----3rd CARD

plus3.onclick = function () {
  //Add 3
  count3 += 1;
  counter3.innerHTML = count3;
  var unit = (unitPrice3 += 50);
  let number = parseInt(unit);
  var newPrice3 = number - 50;
  unitPricer3.innerHTML = `${newPrice3} $`;
  //   Total
  total.innerHTML =
    parseInt(`${unitPrice1}`) -
    100 +
    (parseInt(`${unitPrice2}`) - 20) +
    (parseInt(`${unitPrice3}`) - 50) +
    "$";
};

trash3.onclick = function () {
  //trash 3
  count3 = 0;
  counter3.innerHTML = count3;
  unitPrice3 = 50;
  unitPricer3.innerHTML = `${unitPrice3} $`;
  total.innerHTML =
    parseInt(`${unitPrice1}`) - 100 + (parseInt(`${unitPrice2}`) - 20) + "$";
};

minus3.onclick = function () {
  //Remove 3
  if (count3 > 0) {
    count3--;
    counter3.innerHTML = count3;
  }
  if (unitPrice3 > 50) {
    var unit = (unitPrice3 -= 50);
    let newPrice3 = parseInt(unit) - 50;
    unitPricer3.innerHTML = `${newPrice3} $`;
    //   Total
    total.innerHTML =
      parseInt(`${unitPrice1}`) -
      100 +
      (parseInt(`${unitPrice2}`) - 20) +
      (parseInt(`${unitPrice3}`) - 50) +
      "$";
  } else {
    unitPrice3 = 50;
    unitPricer3.innerHTML = `${unitPrice3} $`;
  }
};

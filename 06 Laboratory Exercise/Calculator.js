var numbers1 = document.getElementById("firstnumber");
var result = document.getElementById("result");
var setNumber = 0;
var number = [];
var Operation = "Default";

function Sum() {
   setNumber += number(numbers1.value);
   Operation = "sum";
}

 function Difference() {
    setNumber -= number(numbers1.value);
    Operation = "difference";
 }

function Product() {
    setNumber *= number(numbers1.value);
    Operation = "product";
 
}

function Quotient() {
    setNumber /= number(numbers1.value);
    Operation = "quotient";
}

function Equals() {
    if(Operation === "sum") {
        setNumber += parseFloat(numbers1.value);
        result.innerHTML = setNumber;
    }
    if(Operation === "difference") {
        setNumber -= parseFloat(numbers1.value);
        result.innerHTML = setNumber;
    }
    if(Operation === "product") {
        setNumber *= parseFloat(numbers1.value);
        result.innerHTML = setNumber;
    }
    if(Operation === "quotient") {
        setNumber /= parseFloat(numbers1.value);
        result.innerHTML = setNumber;
    }
    result.innerHTML = numbers1;
}

function Clear() {
   number = [];
   numbers1.value = 0;
   result.innerHTML = 0;
}

let num1 = 8;
let num2 = 2;
let output = 0;
numE1_dom = document.getElementById("num1-el");
numE2_dom = document.getElementById("num2-el");
output_dom = document.getElementById("sum-el");

// console.log(numEl_dom);
numE1_dom.textContent = num1;
numE2_dom.textContent = num2;


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


addBtn_dom = document.querySelector("#addBtn");
subBtn_dom = document.querySelector("#subBtn");
divBtn_dom = document.querySelector("#divBtn");
mulBtn_dom = document.querySelector("#mulBtn");

addBtn_dom.onclick = function(){
    output = num1+num2;
    output_dom.innerHTML = "Addtion: " + output;
}

subBtn_dom.onclick = function(){
    output = num1-num2;
    output_dom.innerHTML = "Subtraction: " + output;
}

divBtn_dom.onclick = function(){
    output = num1/num2;
    output_dom.innerHTML = "Dividation: " + output;
}

mulBtn_dom.onclick = function(){
    output = num1*num2;
    output_dom.innerHTML = "Multiplication: " + output;
}
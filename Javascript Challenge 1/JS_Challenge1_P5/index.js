// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


error_dom = document.querySelector("#error");
btn_dom = document.querySelector("#btn");

// btn.onclick = function(){
//     error_dom.innerHTML = "<p id='error'>Something went wrong, please try again</p>";
// }

function error(){
    error_dom.innerHTML = "Something went wrong, please try again";
}


let body = document.getElementById("body");
let button = document.getElementById("myButton");
let header = document.getElementById("headers");
let sadButton = document.getElementById("deleteButton");

console.log(body);

button.addEventListener("click", () => {
    if (button.innerText == "Dark Mode") {
        button.innerText = "Light Mode";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.color = "black";
        body.style.backgroundColor = "white";
        button.innerText = "Dark Mode";
    }
});

sadButton.addEventListener("click", () => {
    sadButton.remove();
    alert("You deleted the button :'(");
});

header.addEventListener("mouseover", () => {
    header.style.color = "green";
});

header.addEventListener("mouseout", () => {
    header.style.color = "#a061bb";
});
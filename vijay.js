let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for(item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is", buttonText);
        if(buttonText == "X"){
            buttonText = "*";
            screen.Value += buttonText;
            screen.Value = screenValue;
        }
        else if(buttonText == "C") {
            screenValue = "";
            screenValue = screenValue;
        }
        else if (buttonText == "="){
            screen.Value =eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.Value = screenValue;
        }
    });
};
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let screenvalue = "";

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "C") {
      screenvalue = "";
      screen.value = screenvalue;
    } else if (buttonText == "=") {
      screen.value = eval(screenvalue);
    } else if (buttonText == "Backspace") {
      screenvalue = screenvalue.substring(0, screenvalue.length - 1);
      screen.value = screenvalue;
    } else {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  });
}

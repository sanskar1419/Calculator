let inputbox = document.getElementById("InputBox");
let buttons = document.querySelectorAll("button");

let string = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "=") {
      string = String(eval(string));
      inputbox.value = string;
    } else {
      if (value == "AC") {
        string = "";
        inputbox.value = string;
      } else {
        if (value == "DEL") {
          string = string.substring(0, string.length - 1);
          inputbox.value = string;
        } else {
          if (value == "&#xB1") {
            string = String(-eval(string));
            inputbox.value = string;
          } else {
            string += value;
            inputbox.value = string;
          }
        }
      }
    }
  });
}

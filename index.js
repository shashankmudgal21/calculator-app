let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerText == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if (e.target.innerText == "C") {
      string = " ";
      document.querySelector("input").value = string;
    }
     else {
      string = string + e.target.innerText;
      document.querySelector("input").value = string;
    }
  });
});

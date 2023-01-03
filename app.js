document.querySelector(".color-switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};
//Onclick of the color-switcher-btn, the color-switcher class will toggle the active class


//Grabs all the buttons with the class of theme-buttons
let themeButtons = document.querySelectorAll(".theme-buttons");

//Loops through the buttons and adds an event listener to each one
//When the button is clicked, it grabs the data-color attribute and sets it as the value of the --main--color variable
themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--main--color", dataColor);
  });
});

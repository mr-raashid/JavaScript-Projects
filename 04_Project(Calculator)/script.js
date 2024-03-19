const screenInput = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equalsto = document.querySelector("#equalsto");
const clear = document.querySelector("#clear");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let targetedValue = e.target.dataset.num;
        screenInput.value += targetedValue;
    })

    equalsto.addEventListener("click", () => {
        if(screenInput.value === ""){
            screenInput.value = "Press Num";
        }
        else{
            let ans = eval(screenInput.value);
            screenInput.value = ans;
        }
    })

    clear.addEventListener("click", () => {
        screenInput.value = "";
    })
})

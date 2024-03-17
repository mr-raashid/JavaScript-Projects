let inputField = document.querySelector("#input-field");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let inputValue = inputField.value;
    const result = inputValue.split("").reverse().join("");

    const newElement = document.createElement("p");
          newElement.classList.add("para");
    if(inputValue === result) {
        newElement.appendChild(document.createTextNode("Palindrome"));
        document.body.appendChild(newElement);
    }
    else{
        newElement.appendChild(document.createTextNode("Not a Palindrome"));
        document.body.appendChild(newElement);
    }
    inputField.value = "";
})

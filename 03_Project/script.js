const textArea = document.querySelector("#text-quote");
const generateBtn = document.querySelector("#btn");

generateBtn.addEventListener("click", () => {
    let url = fetch("https://dummyjson.com/quotes");
    url.then((res) => {
        return res.json();
    })
    .then((data) => {
        const randomNum = Math.floor(Math.random () * data.quotes.length);
        console.log(randomNum);
        const randomQuotes = data.quotes[randomNum].quote
        textArea.innerHTML = randomQuotes;
    })
    .catch((error) => {
        console.log(error);
    })  
})
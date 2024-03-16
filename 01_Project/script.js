const colorChanger = document.querySelectorAll("button");
const randomColor = document.getElementById("random-color")

colorChanger.forEach((color) => {
    color.addEventListener("click", (e)=> {
        let bgColor = e.target.id;
        switch (bgColor) {
            case e.target.id:
                document.body.style.backgroundColor = e.target.id;
                break;
        }
    })
})

randomColor.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
})
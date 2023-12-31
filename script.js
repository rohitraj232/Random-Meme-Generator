let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
let url = " https://meme-api.com/gimme";

let getMeme = async() => {
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    title.innerText = data.title;
    meme.src = data.url;
}
getMemeBtn.addEventListener("click", getMeme);
getMeme();
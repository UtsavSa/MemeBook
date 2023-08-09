// first get the elements from html



const inputPlace = document.querySelector(".input-text input[type ='text']");
const submitBar = document.querySelector(".input-text input[type ='submit']");

const memeImg = document.querySelector(".MemeBookContainer img");


const memeTitle = document.querySelector(".MemeBookContainer .meme-title");
const memeAuthor = document.querySelector(".MemeBookContainer .meme-author");



const filterDtls = (url, title, author) =>{

    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By: ${author}`;


};


const callMeme = (lookmeme) =>{

   
    fetch(`https://meme-api.com/gimme/${lookmeme}`)
    .then((response) => response.json())
    .then((data) => {
        filterDtls(data.url, data.title, data.author);
    });
};

const defaultSearchTerm = "dankmemes";
//callMeme(defaultSearchTerm);

submitBar.addEventListener("click", (event) => {
    //event.preventDefault();
    
    const searchTerm = inputPlace.value;
    if(searchTerm){
        callMeme(searchTerm);
    }
});

callMeme(defaultSearchTerm);
   
document.getElementById("goToPage2Btn").addEventListener("click",()=> {

    window.location.href = "index2.html";
    
});
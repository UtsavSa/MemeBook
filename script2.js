document.getElementById("goToPage1Btn").addEventListener("click", () => {
    window.location.href = "index.html";
});


let GenreSelect = document.getElementById("genreSelect");
let SearchBtn = document.getElementById("fetchMemesBtn");


const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach((button) => {
        button.setAttribute("data-liked", "false");

        button.addEventListener("click", () => {
            console.log("Button Clicked");

            const isLiked = button.getAttribute("data-liked") === "true";


            if(!isLiked){
                console.log("Button Clicked");
                button.textContent = "Liked";
                button.setAttribute("data-liked", "true");
            }
            else{
                console.log("Button Clicked");

                button.textContent = "Like"
                button.setAttribute("data-liked", "false");
            }
        })
    })


const fetchAndDisplayMemes = async () => {
    const container = document.querySelector(".memes-scroll-container");
    const searchTerm = GenreSelect.value;
    const numberOfMemesToFetch = 50;

    container.innerHTML = ""; //clear the existing names


    try {

        const fetchedMemes = new Set(); // To keep track of fetched meme URLs

        while (fetchedMemes.size < numberOfMemesToFetch) {
            const response = await fetch(`https://meme-api.com/gimme/${searchTerm}`);
            const data = await response.json();

            if (!fetchedMemes.has(data.url)) {
                const memeHTML = `
                    <div class="meme-item">
                        <img src="${data.url}" alt="${data.title}">
                        <h3>${data.title}</h3>
                        <p>Meme By: ${data.author}</p>
                        <div class = "meme-buttons">
                            <button class = "like-button">Like</button>
                            <a href = "${data.url}" download = "${data.title}.jpg" class = "download-button">Download</a>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML("beforeend", memeHTML);
                fetchedMemes.add(data.url);
            }
        }

        
    } catch (error) {
        console.error("Error fetching meme: ", error);
    }
};

fetchAndDisplayMemes();

SearchBtn.addEventListener("click", fetchAndDisplayMemes);

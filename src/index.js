//console.log('%c HI', 'color: firebrick')

let dogs; 

document.addEventListener('DOMContentLoaded', () => {
    ceo(), breeds();
})

function ceo (){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json)) 
}

function renderImages(images){
    images.message.forEach(renderImage);
}

function renderImage(urlImg) {
    const loc = document.getElementById("dog-image-container")
    const img = document.createElement('img')
    img.className = "dog-image"
    img.height = 300;
    img.src = urlImg;
    loc.appendChild(img);
}

   

function breeds(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then((resp)=> resp.json())
        .then((json) => breed(json));
    
}
function breed(dog) {
    const doggo = Object.keys(dog.message)

dogs = doggo;

doggo.forEach((element) => breedlist(element));
}

function breedlist(dogBreeds) {
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerText = dogBreeds; 
    ul.appendChild(li);

    ul.addEventListener("click", (event) => {
        if (event.target.matches("li")) {
            event.target.style.color ="blue";
        }
    });
}

const dropdownLetter = document.querySelector("#breed-dropdown");

dropdownLetter.addEventListener("change", (event) => {
    const letter = event.target.value;
    const dogslist = dogs.filter((dog) => {
        return dog.startsWith(letter);
    });

const ul = document.getElementById("dog-breeds");
ul.innerHTML = '';
dogslist.forEach((element) => breedlist(element));
 
});
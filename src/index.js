console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", (event) => {
    const imgContainer = document.getElementById("dog-image-container");
    const dogBreedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

    fetch(imgUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            
            data.message.forEach((imgUrl) => {
                const imgElement = document.createElement("img");
                imgElement.src = imgUrl;
                imgContainer.appendChild(imgElement);
            })
        })

    fetch(breedUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const dogBreeds = Object.keys(data.message);

            dogBreeds.forEach((dogBreed) => {
                const listElement = document.createElement("li");

                listElement.textContent = dogBreed;
                listElement.addEventListener("click", () => {
                    listElement.style.color = "blue";
                })
                dogBreedList.appendChild(listElement);
            });
            
            breedDropdown.addEventListener("change", () => {
                const selectedLetter = breedDropdown.value;

                dogBreedList.innerHTML = "";

                dogBreeds.forEach((dogBreed) => {
                    if (dogBreed.startsWith(selectedLetter)) {
                        const listElement = document.createElement("li");
    
                        listElement.textContent = dogBreed;
                        listElement.addEventListener("click", () => {
                            listElement.style.color = "blue";
                        })
                        dogBreedList.appendChild(listElement);
                    }
                    
                });
            })
            
        })
})
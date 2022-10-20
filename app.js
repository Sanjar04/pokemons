
const elUl = document.querySelector("ul");
const elForm = document.querySelector("#form");
const elSearch = document.querySelector("#search");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
   
//   const newLi = elSearch.value.trim().toLowerCase();
//   const array = [];
//   console.log(array);

//   pokemons.forEach((pokemons) => {
//     if (pokemons.name.toLowerCase().includes(newLi)) {
//       array.push(pokemons);
//     }
//   });
//   addList(array);
//   elSearch.value = "";
// });

function addList(pokemon) {
  pokemon.forEach((pokemons) => {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const newTile = document.createElement("h3");
    const newText = document.createElement("p");
    const newOne = document.createElement("span");
    const newTwo = document.createElement("span");

    newImg.src = pokemons.img;
    newTile.innerHTML = pokemons.name;
    newText.innerHTML = pokemons.candy;
    newOne.innerHTML = pokemons.weight;
    newTwo.innerHTML = pokemons.height;

    elUl.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newTile);
    newDiv.appendChild(newText);
    newDiv.appendChild(newOne);
    newDiv.appendChild(newTwo);

    elUl.setAttribute("class", "ul-list gap-4 ps-0");
    newLi.setAttribute(
      "class",
      "bg-light border border-3 border-dark rounded-4 w-18rem"
    );
    newLi.style.width = "18rem";
    newDiv.setAttribute("class", "border-top border-3 border-dark p-3");
    newImg.setAttribute("class", "ms-4 pt-4 mb-5 ps-5");
    newTile.setAttribute("class", "fs-3 fw-bolder");
    newText.setAttribute("class", "fs-5 fw-semibold");
    newTwo.setAttribute("class", "ms-3 fs-5 fw-bolder");
    newOne.setAttribute("class", "fs-5 fw-bolder");
  });
}
addList(pokemons);

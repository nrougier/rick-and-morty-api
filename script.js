const mainSection = document.querySelector(".main-section");
let contenido = document.getElementById("contenido");

mainSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    fetchApi();
  }
  e.stopPropagation();
});

function fetchApi() {
  let mathId = Math.floor(Math.random() * 20);
  let mathIdPage = Math.floor(Math.random() * 42);

  fetch(`https://rickandmortyapi.com/api/character?page=${mathIdPage}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      contenido.innerHTML += `
        <div class="card p-1 m-1 row" style="width: 18rem;">
          <img src="${data.results[mathId].image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${data.results[mathId].name}</h5>
            <li class="card-text"><b>Especie:</b> ${data.results[mathId].species}</li>
            <li class="card-text"><b>Genero:</b> ${data.results[mathId].gender}</li>
            <li class="card-text"><b>locacion:</b> ${data.results[mathId].location.name}</li>
          </div>
        </div>`;
    });
}

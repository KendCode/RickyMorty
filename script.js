const httpRest = () => {
    let verda = "";

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.results.forEach(async character => {
                // Accessing the URL of the character's image
                const imageUrl = character.image;
                const status = character.status;
                const species = character.species;

                // Recuperando detalles del episodio para el personaje 
                const episodesResponse = await fetch(character.episode[0]); // detalles del primer episodio
                const episodeData = await episodesResponse.json();
                const episodeName = episodeData.name;

                // Accediendo al género del personaje
                const gender = character.gender;

                verda += `<div class="col-4">
                    <div class="card character-card">
                        <img src="${imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${character.name}</h5>
                            <p class="card-text">Estado: ${status} | Especie: ${species} | Género: ${gender}</p>
                            <p class="card-text">Episodio: ${episodeName}</p>
                            <hr>
                        </div>
                    </div>
                </div>`;
                document.getElementById("cuerpo").innerHTML = verda;
            });
        });
}

httpRest();
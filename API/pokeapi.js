"use strict"
let grid = document.getElementById('pokemon-grid');

function fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(pokemonData => pokemonData.json())
                    .then(details => {
                        let pokemonCard = document.createElement('div');
                        pokemonCard.className = 'pokemon-card';
                        pokemonCard.innerHTML = `
                            <img src="${details.sprites.front_default}" alt="${pokemon.name}">
                            <h3>${pokemon.name}</h3>
                            <p>Abilities: ${details.abilities.map(ab => ab.ability.name).join(', ')}</p>
                        `;
                        grid.appendChild(pokemonCard);
                    });
            });
        });
}

fetchPokemons();
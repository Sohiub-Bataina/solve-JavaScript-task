"use strict"
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
    const grid = document.getElementById('vehicleGrid');
    countries.forEach(country => {
        const name = country.name.common;
        const flagUrl = country.flags.png;
        
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <h3>${name}</h3>
            <img src="${flagUrl}" alt="Flag of ${name}">
        `;
        grid.appendChild(item);
    });
})
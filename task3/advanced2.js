"use strict"
window.onload = function() {
    const names = ['Ben', 'Joel', 'Judy', 'Anne'];
    const scores = [88, 98, 77, 88];

    document.getElementById('add').addEventListener('click', addScore);
    document.getElementById('displayResults').addEventListener('click', displayResults);
    document.getElementById('displayScores').addEventListener('click', displayScores);

    function addScore() {
        const nameInput = document.getElementById('name').value.trim();
        const scoreInput = parseInt(document.getElementById('score').value);

        if (nameInput === "" || isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
            alert('You must enter a name and a valid score.');
            return;
        }

        names.push(nameInput);
        scores.push(scoreInput);

        document.getElementById('name').value = '';
        document.getElementById('score').value = '';
        document.getElementById('name').focus();
    }

    function displayResults() {
        const resultsDiv = document.getElementById('results');
        const totalScores = scores.reduce((a, b) => a + b, 0);
        const averageScore = totalScores / scores.length;
        const highestScore = Math.max(...scores);
        const highestIndex = scores.indexOf(highestScore);
        const highestName = names[highestIndex];

        resultsDiv.innerHTML = `
            <h2 class="color-blue">Results</h2>
            <p>Average score = ${averageScore.toFixed(2)}</p>
            <p>High score = ${highestName} with a score of ${highestScore}</p>
        `;
    }

    function displayScores() {
        const tableBody = document.querySelector('#scores_table tbody');
        tableBody.innerHTML = '';

        for (let i = 0; i < names.length; i++) {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const scoreCell = document.createElement('td');

            nameCell.textContent = names[i];
            scoreCell.textContent = scores[i];

            row.appendChild(nameCell);
            row.appendChild(scoreCell);
            tableBody.appendChild(row);
        }
    }
};

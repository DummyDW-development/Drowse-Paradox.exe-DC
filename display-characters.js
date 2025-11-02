        const searchBtn = document.getElementById('searchBtn');
        const searchInp = document.getElementById('searchInp');
        const results = document.getElementById('results');

        function displayResults(list) {
            results.innerHTML = '';
            list.forEach(c => {
                if (c.placement === 'contentSeparator') {
                    const sep = document.createElement('div');
                    sep.className = 'content-separator';
                    sep.textContent = c.name;
                    results.appendChild(sep);
                } else if (c.placement === 'charSeparator') {
                    const sep = document.createElement('div');
                    sep.className = 'category-separator';
                    sep.textContent = c.name;
                    results.appendChild(sep);
                } else if (c.placement === 'char') {
                    const div = document.createElement('div');
                    div.className = 'result-item';
                    div.innerHTML = `
        <img src="${c.img}" alt="${c.name}">
        <span>${c.name}</span>
        <button class="view-btn" data-name="${c.name}">View</button>
      `;
                    results.appendChild(div);
                }
            });

            // Add event listeners to the newly created view buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', e => {
                    const name = e.target.getAttribute('data-name');
                    const char = characters.find(c => c.name === name);
                    if (char) {
                        showCharacterStats(char);
                    }
                });
            });
        }

        // MOVE THIS FUNCTION OUTSIDE displayResults
        function showCharacterStats(char) {
    results.classList.add('fade-out');

    setTimeout(() => {
        const viewDetails = document.getElementById('viewDetails');

        // Dynamic stat order - only show what exists for each character
        const baseStatOrder = [
            "Difficulty",
            "Health", 
            "Regular Speed",
            "Sprinting Speed", 
            "Max Stamina",
            "Stamina Loss per sec",
            "Stamina Gain per sec",
            "Terror Radius"  // Will only show if the character has this stat
        ];

        // Filter to only include stats that actually exist for this character
        const statOrder = baseStatOrder.filter(stat => 
            char.stats && char.stats[stat] !== undefined
        );

        let statsHTML = `
      <div class="character-header">
        <h1>${char.name.toUpperCase()}</h1>
      </div>
      
      <div class="character-content">
        <div class="character-image">
          <img src="${char.img}" alt="${char.name}" onerror="this.src='https://via.placeholder.com/300x400/333/fff?text=Image+Not+Found'">
        </div>
        
        <div class="character-stats">
          <h3>STATS</h3>
          <div class="stats-grid">
    `;

        // Now only display stats that this character actually has
        statOrder.forEach(stat => {
            statsHTML += `
                <div class="stat-row">
                    <span class="stat-label">${stat}:</span>
                    <span class="stat-value">${char.stats[stat]}</span>
                </div>
            `;
        });

        statsHTML += `
          </div>
        </div>
      </div>
      
      <div class="character-description">
        <h3>GENERAL INFO</h3>
        <p>${char.description || 'No description available.'}</p>
      </div>
    `;

        viewDetails.innerHTML = statsHTML;
        document.getElementById('viewPanel').classList.add('active');
    }, 400);
}
// Add search on input (better UX)
searchInp.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
        displayResults(characters);
        return;
    }
    const filtered = characters.filter(c => c.name.toLowerCase().includes(query));
    displayResults(filtered);
});

// Add keyboard support
searchInp.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

// Add escape key to close panel
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('viewPanel').classList.remove('active');
        results.classList.remove('fade-out');
    }
});

        // Show all by default
        displayResults(characters);


        // Close button logic
        document.getElementById('closeView').addEventListener('click', () => {
            document.getElementById('viewPanel').classList.remove('active');
            setTimeout(() => {
                results.classList.remove('fade-out');
            }, 500);
        });

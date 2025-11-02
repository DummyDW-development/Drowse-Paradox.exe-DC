

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
        const baseStatOrder = [
            "Difficulty", "Health", "Regular Speed", "Sprinting Speed", 
            "Max Stamina", "Stamina Loss per sec", "Stamina Gain per sec", "Terror Radius"
        ];
        const statOrder = baseStatOrder.filter(stat => 
            char.stats && char.stats[stat] !== undefined
        );

        // Build skins button if character has at least 2 total skins (1 alternative)
        let skinsButtonHTML = '';
        if (char.skins && Array.isArray(char.skins) && char.skins.length >= 2) {
            skinsButtonHTML = `
                <button class="skins-toggle-btn" id="skinsToggleBtn">
                    <i class="fas fa-palette"></i> Skins (${char.skins.length})
                </button>
                <div class="skins-menu" id="skinsMenu">
                    <div class="skins-grid">
                        ${char.skins.map(skin => `
                            <div class="skin-item" data-skin-img="${skin.img}">
                                <img src="${skin.img}" alt="${skin.name}" 
                                     onerror="this.src='https://via.placeholder.com/100x100/333/fff?text=?'">
                                <div class="skin-overlay">
                                    <span class="skin-name">${skin.name}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        let statsHTML = `
            <div class="character-header">
                <h1>${char.name.toUpperCase()}</h1>
            </div>
            
            <div class="character-content">
                <div class="character-image">
                    <img src="${char.img}" alt="${char.name}" id="characterViewImage" 
                         onerror="this.src='https://via.placeholder.com/300x400/333/fff?text=Image+Not+Found'">
                    ${skinsButtonHTML}
                </div>
                
                <div class="character-stats">
                    <h3>STATS</h3>
                    <div class="stats-grid">
                        ${statOrder.map(stat => `
                            <div class="stat-row">
                                <span class="stat-label">${stat}:</span>
                                <span class="stat-value">${char.stats[stat]}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="character-description">
                <h3>GENERAL INFO</h3>
                <p>${char.description || 'No description available.'}</p>
            </div>
        `;

        viewDetails.innerHTML = statsHTML;
        
        // Add skins menu functionality
        const skinsToggleBtn = document.getElementById('skinsToggleBtn');
        const skinsMenu = document.getElementById('skinsMenu');
        const characterImage = document.getElementById('characterViewImage');
        
        // Replace the existing skins functionality with this more robust version:
if (skinsToggleBtn && skinsMenu) {
    console.log('Setting up skins menu...');
    
    // Toggle skins menu
    const toggleMenu = (e) => {
        if (e) e.stopPropagation();
        console.log('Toggling menu, current state:', skinsMenu.classList.contains('active'));
        skinsMenu.classList.toggle('active');
    };
    
    skinsToggleBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside - more specific
    const closeMenu = (e) => {
        if (skinsMenu.classList.contains('active') && 
            !skinsMenu.contains(e.target) && 
            e.target !== skinsToggleBtn) {
            console.log('Closing menu from outside click');
            skinsMenu.classList.remove('active');
        }
    };
    
    document.addEventListener('click', closeMenu);
    
    // Prevent menu clicks from closing the menu
    skinsMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Skin selection
    const skinItems = skinsMenu.querySelectorAll('.skin-item');
    skinItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const skinImg = item.getAttribute('data-skin-img');
            console.log('Changing skin to:', skinImg);
            characterImage.src = skinImg;
            skinsMenu.classList.remove('active');
            
            item.classList.add('selected');
            setTimeout(() => item.classList.remove('selected'), 500);
        });
    });
    
    console.log('Skins menu setup complete');
}
        
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

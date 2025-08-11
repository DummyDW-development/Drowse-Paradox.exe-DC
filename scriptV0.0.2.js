const characters = [
    // Survivors
    { name: 'Forsaken', placement: 'contentSeparator'},

    { name: 'Survivors', placement: 'charSeparator'},


    {
        name: 'Noob',
        img: 'https://preview.redd.it/noob-render-d-v0-03sszvgxlzcf1.png?width=320&crop=smart&auto=webp&s=e8694b551f2b50dd503421fe2457e4102f2d3b4b'
        , placement: 'char'

    },
    {
        name: 'Shedletsky',
        img: 'https://preview.redd.it/shedletsky-cosplay-skin-concept-v0-p6anrklzhx7f1.png?width=419&format=png&auto=webp&s=579529408534588ad48e38619b48510fb5c1735c'
        , placement: 'char'

    },
    {
        name: 'Chance',
        img: 'https://preview.redd.it/i-made-chance-from-forsaken-rate-please-v0-cp840pxulofe1.png?width=320&crop=smart&auto=webp&s=a5373e4a114426ab71cc4800580dfa29fcc0f9d1'
        , placement: 'char'
    },
    {
        name: 'Two Time',
        img: 'https://preview.redd.it/all-the-old-and-new-two-time-renders-made-by-yuyu-v0-hz5mbl4oulxe1.jpg?width=640&crop=smart&auto=webp&s=765bb23aeee6688880d83850132259f1eeeecaa1'
        , placement: 'char'

    },
    {
        name: 'Dusekkar',
        img: 'https://preview.redd.it/what-is-the-most-no-skill-survivor-in-your-opinion-v0-v0f79ljvnzxe1.png?width=640&crop=smart&auto=webp&s=ef3299fbaafdec01ae0cb0fdbb6075ac1f0be0ca'
        , placement: 'char'

    },
    {
        name: 'Builderman',
        img: 'https://preview.redd.it/what-is-the-most-no-skill-survivor-in-your-opinion-v0-3pkf0djvnzxe1.png?width=640&crop=smart&auto=webp&s=81e88ca850650af7fe51bc62bc8830b9a8e8a1c3'
        , placement: 'char'

    },
    {
        name: 'Elliot',
        img: 'https://preview.redd.it/fanmade-elliot-render-cause-the-current-one-got-removed-v0-p739z4ixzh0f1.png?width=640&crop=smart&auto=webp&s=693c8d55952558194e009e35d7f102e0670474cb'
        , placement: 'char'

    },
    {
        name: 'Geust 1337',
        img: 'https://preview.redd.it/what-is-the-most-no-skill-survivor-in-your-opinion-v0-ojxehdkvnzxe1.png?width=640&crop=smart&auto=webp&s=f7b8b06b3ae5e1811069cd64826d90f7dc58543d'
        , placement: 'char'

    },
    {
        name: '007n7',
        img: 'https://preview.redd.it/what-is-the-most-no-skill-survivor-in-your-opinion-v0-u5rm0dlvnzxe1.png?width=320&crop=smart&auto=webp&s=d8fa4ef4fd6107dc4bcaad9314b79f2e2d7258f2'
        , placement: 'char'

    },
    {
        name: 'Taph',
        img: 'https://preview.redd.it/what-is-the-most-no-skill-survivor-in-your-opinion-v0-fhqbq4jvnzxe1.png?width=320&crop=smart&auto=webp&s=2b60bad34b7618b65228bd5e6e1d04c4cafed76d'
        , placement: 'char'

    },

    { name: 'Killers', placement: 'charSeparator'},


    // Killers
    {
        name: 'Noli',
        img: 'https://preview.redd.it/how-we-feeling-about-the-noli-redesign-v0-xau8s0wzwa3f1.jpg?width=640&crop=smart&auto=webp&s=b2a2462ef64db253a693c9e97def1a55464c03cf'
        , placement: 'char'

    },
    {
        name: 'John Doe',
        img: 'https://preview.redd.it/has-anyone-noticed-that-there-is-a-new-model-in-the-new-v0-mg6mfsz1rt6f1.png?width=439&format=png&auto=webp&s=ab8ed2adcc2ad115ecf23f5e274777829a80e3e8'
        , placement: 'char'

    },
    {
        name: 'Jason',
        img: 'https://preview.redd.it/jason-is-totally-glitched-right-now-and-has-a-new-render-v0-yt98rmbmft6f1.png?width=2000&format=png&auto=webp&s=6831aaacde491c06ea2a5c4b59ec5fb05e35a919'
        , placement: 'char'

    },
    {
        name: 'C00lkidd',
        img: 'https://preview.redd.it/c00lkidd-render-remake-v0-xx42scrn696f1.png?width=512&format=png&auto=webp&s=57dd8397886a4bb2b285fe6dac093231c26b932d'
        , placement: 'char'

    },
    {
        name: '1x1x1x1',
        img: 'https://i.redd.it/is-betrayed-1x1x1x1-male-or-female-v0-vpjkoc3333re1.png?width=417&format=png&auto=webp&s=a3438babad01abf6c135c0c1c651c44bcef273cc'
        , placement: 'char'

    },

    { name: 'Paradox.exe DC', placement: 'contentSeparator'},

    { name: 'Survivors?', placement: 'charSeparator'},

    {
        name: 'NlSickle',
        img: 'https://pouch.jumpshare.com/preview/uBQP8LhYr1pBLxAgj5Co3pbMugZ4zTWl9MPDXBubMC44Lnca06mzUfFQNNaLQt6ZDuXc8H7Bd9hQklYcuvaa8TYMEZUhke5o73bhl4hkwv4'
        , placement: 'char'

    },
    {
        name: 'NlBeary',
        img: 'https://pouch.jumpshare.com/preview/r2zo2hT2VwWDXHWRNyhYYyIDLotsADB_WxKBwVtheQET5on-RnfM7wgxQ636UI6vHhAeLBtbyCOA9YgbVm-mvkZ_at76Wfjdvp2soe-cvG4'
        , placement: 'char'
    },
    {
        name: '☆ S M I L E ☆',
        img: 'https://pouch.jumpshare.com/preview/S1NrdOjJp82_Wxnz3EFezzEG5Uk5lZNq4thUvhxfgkd0aRoJ9X_1WZZUihGrAN8nqX4RI9nDNap3qeGWypyqM-f8UOSn52tUdSfdxFpARdk'
        , placement: 'char'
    },
    {
        name: 'Cosmic Xin Error',
        img: 'https://pouch.jumpshare.com/preview/PewX87lRlw_nxoAKVVz8PeF_J1OdCzOv0w6EsouCkNLowS10pC8Y5DJplwLkunWfqX4RI9nDNap3qeGWypyqMyWU45DnygWXShSzUSBjlek'
        , placement: 'char'
    },
    {
        name: 'Silly Goober',
        img: 'https://pouch.jumpshare.com/preview/-Bx9qjdzPW_5V9M7OmuaTuB2liwv_5m-wOC5z-GFBXl_dpBVxr7MAJ1j46HctzCMHhAeLBtbyCOA9YgbVm-mvouFevc3Xdu1H_08K_Vl4Oc'
        , placement: 'char'
    },
    {
        name: 'Cosmia//Leah',
        img: 'https://pouch.jumpshare.com/preview/Ogefb0yhknho4oEoEyq0QL9C2rwNqT2AbvYZLuq1lal9Iw69k1m0xBjqw1SKSQadHhAeLBtbyCOA9YgbVm-mvoUY0dG8sGdKorzfkJlnx3Y'
        , placement: 'char'
    },
    {
        name: 'SashaRose',
        img: 'https://pouch.jumpshare.com/preview/hPKpk95RHphuhWtaM4-c5YY5Py4gugnTnOl08dcnaR6570lBFarNeHnZ1R_MUnisHhAeLBtbyCOA9YgbVm-mvtJ8ps-DULxgUsNZX4XRRxs'
        , placement: 'char'
    },
    {
        name: 'Asher Dasher',
        img: 'https://pouch.jumpshare.com/preview/VNhuHxyEmkQ44ARbjhDzmwlksPCS7bZyRJ21lYT8FAWIoYEiyIzd8Em1QolTpHOkHhAeLBtbyCOA9YgbVm-mvoTxtsW_44hynAVfvCOYuDY'
        , placement: 'char'
    },
    {
        name: 'Hauntuh/Emoji Man',
        img: 'https://pouch.jumpshare.com/preview/z3EPalAt-S7Cfet4IwjYsHrLWzzmpveYT-PJcqkUfDLe0RiENxZoEM8hlDauXOGUqX4RI9nDNap3qeGWypyqM9os5O0--9iKQsofTTsuiFA'
        , placement: 'char'
    },
    {
        name: 'Evadare/Kontos',
        img: 'https://pouch.jumpshare.com/preview/q2V9_yMTAWOmldlHGliQWBnU-cBtWsRWauV-1eLTQ00lmPyKUgQnGYXHg39gBjQQHhAeLBtbyCOA9YgbVm-mvhPihhC9gqLp1ZbzimVlYzs'
        , placement: 'char'
    },
    {
        name: 'Wanderer Orcaz',
        img: 'https://pouch.jumpshare.com/preview/rnYWdFuC_7inxUYSD-bgCMH8st99MaS0-xq0eAOqI6nnMZwbKpIQ1wV6KBnbCnoWHhAeLBtbyCOA9YgbVm-mvm2bMLengbsefzRjP4Yf5GI'
        , placement: 'char'
    }
];

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

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const name = e.target.getAttribute('data-name');
      alert(`Viewing details for: ${name}`);
    });
  });
}



searchBtn.addEventListener('click', () => {
    const query = searchInp.value.trim().toLowerCase();
    if (!query) {
        displayResults(characters);
        return;
    }
    const filtered = characters.filter(c => c.name.toLowerCase().includes(query));
    displayResults(filtered);
});

// Show all by default
displayResults(characters);

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const name = e.target.getAttribute('data-name');
    const char = characters.find(c => c.name === name);

    results.classList.add('fade-out');

    setTimeout(() => {
      const img = new Image();
      img.src = char.img;
      img.alt = char.name;

      img.onload = () => {
        const fixedHeight = 300; // desired fixed height of container & image

        // Calculate scaled width preserving aspect ratio
        const scale = fixedHeight / img.naturalHeight;
        const scaledWidth = img.naturalWidth * scale;

        // Create wrapper div with dynamic width & fixed height
        const wrapper = document.createElement('div');
        wrapper.style.height = fixedHeight + 'px';
        wrapper.style.width = scaledWidth + 'px';
        wrapper.style.margin = '20px auto';
        wrapper.style.border = '2px solid white';
        wrapper.style.borderRadius = '10px';
        wrapper.style.overflow = 'hidden';
        wrapper.style.backgroundColor = '#111';
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';

        // Style image to have 100% height, auto width (maintain aspect)
        img.style.height = fixedHeight + 'px';
        img.style.width = 'auto';
        img.style.objectFit = 'contain';

        wrapper.appendChild(img);

        // Insert into viewDetails
        const viewDetails = document.getElementById('viewDetails');
        viewDetails.innerHTML = `<h2>${char.name}</h2>`;
        viewDetails.appendChild(wrapper);
        viewDetails.innerHTML += `<p>More stats/info about ${char.name} here...</p>`;

        document.getElementById('viewPanel').classList.add('active');
      };

      img.onerror = () => {
        document.getElementById('viewDetails').innerHTML = `
          <h2>${char.name}</h2>
          <p>Image failed to load.</p>
        `;
        document.getElementById('viewPanel').classList.add('active');
      };
    }, 400);
  });
});

// Close button logic
document.getElementById('closeView').addEventListener('click', () => {
  document.getElementById('viewPanel').classList.remove('active');
  setTimeout(() => {
    results.classList.remove('fade-out');
  }, 500); // wait for panel to slide down
});

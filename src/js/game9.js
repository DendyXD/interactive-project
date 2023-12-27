document.querySelectorAll('input[name="fact"]').forEach(radio => {
  radio.addEventListener('change', function () {
    applyFilter(this.value);
  });
});

function applyFilter(selectedFact) {
  const scientistList = document.querySelector('#scientistList');
  const scientists = Array.from(scientistList.querySelectorAll('.grid-item'));

  scientists.forEach(scientist => {
    scientist.style.listStyleType = 'none'; // Додана ця строка коду

    const birthYear = parseInt(scientist.getAttribute('data-birth'), 10);
    const name = scientist.getAttribute('data-name');
    const surname = scientist.getAttribute('data-surname');

    switch (selectedFact) {
      case 'bornIn20thCentury':
        scientist.style.display = birthYear < 1900 && birthYear >= 1800 ? 'list-item' : 'none';
        break;
      case 'bornInAmerica':
        scientist.style.display = name === 'Albert' && surname === 'Einstein' ? 'list-item' : 'none';
        break;
      case 'sortAlphabetically':
        scientists.sort((a, b) => a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')))
          .forEach((scientist, index) => {
            scientist.style.order = index;
            scientistList.appendChild(scientist);
          });
        break;
      case 'startsWithC':
        scientist.style.display = surname.startsWith('C') ? 'list-item' : 'none';
        break;
      case 'sortByAge':
        scientists.sort((a, b) => {
          const birthYearA = parseInt(a.getAttribute('data-birth'), 10);
          const deathYearA = parseInt(a.getAttribute('data-death'), 10);
          const birthYearB = parseInt(b.getAttribute('data-birth'), 10);
          const deathYearB = parseInt(b.getAttribute('data-death'), 10);
        
          return (deathYearA - birthYearA) - (deathYearB - birthYearB);
        })
        .forEach((scientist, index) => {
          scientist.style.order = index;
          scientistList.appendChild(scientist);
        });
        break;
      case 'removeStartsWithA':
        scientist.style.display = !name.startsWith('A') ? 'list-item' : 'none';
        break;
      case 'findOldest':
        const oldestScientist = Array.from(scientists)
          .reduce((oldest, current) => (parseInt(current.getAttribute('data-birth'), 10) > parseInt(oldest.getAttribute('data-birth'), 10)) ? current : oldest);

        scientists.forEach(s => s.style.display = (s === oldestScientist) ? 'list-item' : 'none');
        break;
      case 'findMinMaxAge':
        const currentYear = new Date().getFullYear();
      
        const oldestAgeScientist = Array.from(scientists)
            .reduce((oldest, current) => {
                const birthYear = parseInt(current.getAttribute('data-birth'), 10);
                const deathYear = parseInt(current.getAttribute('data-death'), 10) || currentYear;
                const age = deathYear - birthYear;
      
                return age > (parseInt(oldest.getAttribute('data-death') || currentYear, 10) - parseInt(oldest.getAttribute('data-birth'), 10))
                    ? current
                    : oldest;
            });
      
        const youngestAgeScientist = Array.from(scientists)
            .reduce((youngest, current) => {
                const birthYear = parseInt(current.getAttribute('data-birth'), 10);
                const deathYear = parseInt(current.getAttribute('data-death'), 10) || currentYear;
                const age = deathYear - birthYear;
      
                return age < (parseInt(youngest.getAttribute('data-death') || currentYear, 10) - parseInt(youngest.getAttribute('data-birth'), 10))
                    ? current
                    : youngest;
            });
      
        scientists.forEach(s => s.style.display = (s === oldestAgeScientist || s === youngestAgeScientist) ? 'list-item' : 'none');
        break;
      
      case 'sameInitials':
        scientists.forEach(s => s.style.display = (name.charAt(0) === surname.charAt(0)) ? 'list-item' : 'none');
        break;
      default:
        scientist.style.display = 'list-item';
        scientist.style.order = '';
        break;
    }
  });
}



// const chda = document.querySelector('.chda');
// const alei = document.querySelector('.alei');
// const amni = document.querySelector('.amni');
// const macu = document.querySelector('.macu');
// const thje = document.querySelector('.thje');
// const gaga = document.querySelector('.gaga');
// const nibo = document.querySelector('.nibo');
// const nico = document.querySelector('.nico');
// const isne = document.querySelector('.isne');
// const kama = document.querySelector('.kama');
// const altu = document.querySelector('.altu');
// const pahe = document.querySelector('.pahe');

// const cont = document.querySelector('.grid-item');
// function chdacl() {
//   chda.remove();
//   const newText = document.createElement('p');
//   // newText.style.transition = 'all 1s ease 0s';
//   newText.textContent = 'Чарльз Дарвін(1809-1882)';
//   newText.setAttribute('class', 'poppingText');
//   cont.append(newText);

//   const alei = document.createElement('img');
//   alei.src = './images/scientists/Albert_Einstein.jpg';
//   alei.setAttribute('class', 'alei');

//   const amni = document.createElement('img');
//   amni.src = './images/scientists/Amosov_Nikolai.jpg';
//   amni.setAttribute('class', 'amni');

//   const macu = document.createElement('img');
//   macu.src = './images/scientists/Marie_Curie.jpg';
//   macu.setAttribute('class', 'macu');

//   const thje = document.createElement('img');
//   thje.src = './images/scientists/Thomas_Jefferson.jpg';
//   thje.setAttribute('class', 'thje');

//   const gaga = document.createElement('img');
//   gaga.src = './images/scientists/Galileo_Galilei.jpg';
//   gaga.setAttribute('class', 'gaga');

//   const nibo = document.createElement('img');
//   nibo.src = './images/scientists/Niels_Bohr.jpg';
//   nibo.setAttribute('class', 'nibo');

//   const nico = document.createElement('img');
//   nico.src = './images/scientists/Nicolaus_Copernicus.jpg';
//   nico.setAttribute('class', 'nico');

//   const isne = document.createElement('img');
//   isne.src = './images/scientists/Isaac_Newtone.jpg';
//   isne.setAttribute('class', 'isne');

//   const kama = document.createElement('img');
//   kama.src = './images/scientists/Karl_Marx.jpg';
//   kama.setAttribute('class', 'kama');
  
//   const altu = document.createElement('img');
//   altu.src = './images/scientists/Alan_Turing.jpg';
//   altu.setAttribute('class', 'altu');
  
//   const pahe = document.createElement('img');
//   pahe.src = './images/scientists/Patrick_Henry.jpg';
//   pahe.setAttribute('class', 'pahe');
// };

// function aleicl() {
//   alei.remove();
//   const newText = document.createElement('p');
//   newText.textContent = 'Альберт Ейнштейн(1879-1955)';
//   newText.setAttribute('class', 'poppingText');
//   cont.append(newText);

//   const chda = document.createElement('img');
//   chda.src = './images/scientists/Charles_Darwin.jpg';
//   chda.setAttribute('class', 'chda');

//   const amni = document.createElement('img');
//   amni.src = './images/scientists/Amosov_Nikolai.jpg';
//   amni.setAttribute('class', 'amni');

//   const macu = document.createElement('img');
//   macu.src = './images/scientists/Marie_Curie.jpg';
//   macu.setAttribute('class', 'macu');

//   const thje = document.createElement('img');
//   thje.src = './images/scientists/Thomas_Jefferson.jpg';
//   thje.setAttribute('class', 'thje');

//   const gaga = document.createElement('img');
//   gaga.src = './images/scientists/Galileo_Galilei.jpg';
//   gaga.setAttribute('class', 'gaga');

//   const nibo = document.createElement('img');
//   nibo.src = './images/scientists/Niels_Bohr.jpg';
//   nibo.setAttribute('class', 'nibo');

//   const nico = document.createElement('img');
//   nico.src = './images/scientists/Nicolaus_Copernicus.jpg';
//   nico.setAttribute('class', 'nico');

//   const isne = document.createElement('img');
//   isne.src = './images/scientists/Isaac_Newtone.jpg';
//   isne.setAttribute('class', 'isne');

//   const kama = document.createElement('img');
//   kama.src = './images/scientists/Karl_Marx.jpg';
//   kama.setAttribute('class', 'kama');
  
//   const altu = document.createElement('img');
//   altu.src = './images/scientists/Alan_Turing.jpg';
//   altu.setAttribute('class', 'altu');
  
//   const pahe = document.createElement('img');
//   pahe.src = './images/scientists/Patrick_Henry.jpg';
//   pahe.setAttribute('class', 'pahe');
// };

// chda.addEventListener('click', chdacl);
// alei.addEventListener('clcik', aleicl);
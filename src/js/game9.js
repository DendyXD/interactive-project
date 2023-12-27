// document.querySelectorAll('input[name="fact"]').forEach(radio => {
//   radio.addEventListener('change', function () {
//     applyFilter(this.value);
//   });
// });

// function applyFilter(selectedFact) {
//   const scientistList = document.querySelector('#scientistList');
//   const scientists = Array.from(scientistList.querySelectorAll('.grid-item'));

//   scientists.forEach(scientist => {
//     const birthYear = parseInt(scientist.getAttribute('data-birth'), 10);
//     const name = scientist.getAttribute('data-name');
//     const surname = scientist.getAttribute('data-surname');

//     switch (selectedFact) {
//       case 'bornIn20thCentury':
//         scientist.style.display = birthYear < 1900 && birthYear >= 1800 ? 'list-item' : 'none';
//         break;
//       case 'bornInAmerica':
//         scientist.style.display = name === 'Albert' && surname === 'Einstein' ? 'list-item' : 'none';
//         break;
//       case 'sortAlphabetically':
//         scientists.sort((a, b) => a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')))
//           .forEach((scientist, index) => {
//             scientist.style.order = index;
//             scientistList.appendChild(scientist);
//       });
//         break;
//       case 'startsWithC':
//         scientist.style.display = surname.startsWith('C') ? 'list-item' : 'none';
//         break;
//       case 'sortByAge':
//         scientists.sort((a, b) => parseInt(a.getAttribute('data-birth'), 10) - parseInt(b.getAttribute('data-birth'), 10))
//           .forEach((scientist, index) => {
//             scientist.style.order = index;
//             scientistList.appendChild(scientist);
//         });
//         break;
//       case 'removeStartsWithA':
//         scientist.style.display = !name.startsWith('A') ? 'list-item' : 'none';
//         break;
//       case 'findOldest':
//         const oldestScientist = Array.from(scientists)
//           .reduce((oldest, current) => (parseInt(current.getAttribute('data-birth'), 10) > parseInt(oldest.getAttribute('data-birth'), 10)) ? current : oldest);

//         scientists.forEach(s => s.style.display = (s === oldestScientist) ? 'list-item' : 'none');
//         break;
//       case 'findMinMaxAge':
//         const oldestAgeScientist = Array.from(scientists)
//           .reduce((oldest, current) => (2023 - parseInt(current.getAttribute('data-birth'), 10)) > (2023 - parseInt(oldest.getAttribute('data-birth'), 10)) ? current : oldest);

//         const youngestAgeScientist = Array.from(scientists)
//           .reduce((youngest, current) => (2023 - parseInt(current.getAttribute('data-birth'), 10)) < (2023 - parseInt(youngest.getAttribute('data-birth'), 10)) ? current : youngest);

//         scientists.forEach(s => s.style.display = (s === oldestAgeScientist || s === youngestAgeScientist) ? 'list-item' : 'none');
//         break;
//       case 'sameInitials':
//         scientists.forEach(s => s.style.display = (name.charAt(0) === surname.charAt(0)) ? 'list-item' : 'none');
//         break;
//       default:
//         scientist.style.display = 'list-item';
//         scientist.style.order = '';
//         break;
//     }
//   });

//   // const checkedRadioButton = document.querySelector('input[name="fact"]:checked');
//   // if (checkedRadioButton && checkedRadioButton.value === selectedFact) {
//   //   checkedRadioButton.checked = false;
//   // }
// }

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
        const oldestAgeScientist = Array.from(scientists)
          .reduce((oldest, current) => (2023 - parseInt(current.getAttribute('data-birth'), 10)) > (2023 - parseInt(oldest.getAttribute('data-birth'), 10)) ? current : oldest);

        const youngestAgeScientist = Array.from(scientists)
          .reduce((youngest, current) => (2023 - parseInt(current.getAttribute('data-birth'), 10)) < (2023 - parseInt(youngest.getAttribute('data-birth'), 10)) ? current : youngest);

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

const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const typeSort = ['id-top', 'id-down', 'title-top', 'title-down', 'year-top', 'year-down', 'imdb-top', 'imdb-down'];
const table = document.createElement('table');

document.querySelector('body').insertAdjacentElement('afterbegin', table);

let index = 0;
let sortData;

function sorting(type) {
  switch (type) {
    case 'id-top':
      sortData = data.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      break;
    case 'id-down':
      sortData = data.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      break;
    case 'title-top':
      sortData = data.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      break;
    case 'title-down':
      sortData = data.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      break;
    case 'year-top':
      sortData = data.sort((a, b) => {
        if (a.year > b.year) {
          return 1;
        }
        if (a.year < b.year) {
          return -1;
        }
        return 0;
      });
      break;
    case 'year-down':
      sortData = data.sort((a, b) => {
        if (a.year < b.year) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
      break;
    case 'imdb-top':
      sortData = data.sort((a, b) => {
        if (a.imdb > b.imdb) {
          return 1;
        }
        if (a.imdb < b.imdb) {
          return -1;
        }
        return 0;
      });
      break;
    case 'imdb-down':
      sortData = data.sort((a, b) => {
        if (a.imdb < b.imdb) {
          return 1;
        }
        if (a.imdb > b.imdb) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      return 0;
  }
  return true;
}

let imdb;

table.innerHTML += '<tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr>';
sorting(typeSort[index]);
sortData.forEach((row) => {
  imdb = row.imdb;
  if (row.imdb.toString().length === 1) {
    imdb = `${row.imdb}.00`;
  } else if (row.imdb.toString().length === 3) {
    imdb = `${row.imdb}0`;
  }
  table.innerHTML += `<tr><td>${row.id}</td><td>${row.title}</td><td>(${row.year})</td><td>imdb: ${imdb}</td></tr>`;
});

setInterval(() => {
  table.innerHTML = '';
  table.innerHTML += '<tr><td>id</td><td>title</td><td>year</td><td>imdb</td></tr>';
  sorting(typeSort[index]);
  sortData.forEach((row) => {
    imdb = row.imdb;
    if (row.imdb.toString().length === 1) {
      imdb = `${row.imdb}.00`;
    } else if (row.imdb.toString().length === 3) {
      imdb = `${row.imdb}0`;
    }
    table.innerHTML += `<tr><td>${row.id}</td><td>${row.title}</td><td>(${row.year})</td><td>imdb: ${imdb}</td></tr>`;
  });
  if (index === typeSort.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
}, 2000);

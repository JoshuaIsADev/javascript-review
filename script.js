const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//DESTRUCTURING when we need data out of an object or an array
const book = getBook(1);
console.log(book);

const { title, publicationDate, author, genres, hasMovieAdaptation, pages } =
  book;

console.log(genres);

const genre1 = genres[0];

console.log(genre1);

const [genre1b, genre2, genre3] = genres;

console.log(genre1b, genre2, genre3);

//REST OPERATOR when we need the rest of the data
const [genre1c, genre2c, genre3c, ...otherGenres] = genres;

console.log(otherGenres);

//SPREAD OPERATOR take all values out of an array and place them one by one in a new array
const newGenres = [genres, 'epic fantasy']; // returns original array and adds new object last, which is not what we want
newGenres;
const newSpreadGenres = [...genres, 'epic fantasy']; // add ... to take out each item in an array and "spreads" them
newSpreadGenres;

const updatedBook = { book, moviePublicationDate: '2001-12-19' }; // returns original object and adds new object last, which is not what we want
updatedBook;
const updatedSpreadBook = {
  ...book,
  moviePublicationDate: '2001-12-19',
  pages: 1210, // you can overwrite properties because it comes after spread out original object
}; // add ... to take out each item in an object and "spreads" them
updatedSpreadBook;

//TERNARARIES INSTEAD OF IF ELSE
// if else is a statement and does not return a value. Terneraries returns a value
// pages > 1000 //condition
//   ? 'over a thousand' // result if condition is true
//   : 'less than 1000'; //result if condition is false

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
console.log(pagesRange);

//ARROW FUNCTION
// function getYear(str) {
//   return str.split('-')[0];
// }

const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

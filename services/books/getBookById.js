//import recordData from '../../data/records.json' //assert { type: "json" };
const booksData = require('../../data/books.json');


const getBookById = (id) => {
  return booksData.books.find(book => book.id === id);
}

//export default getBookById;
module.exports = getBookById;

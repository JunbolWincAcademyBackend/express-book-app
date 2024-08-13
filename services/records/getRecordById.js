//import bookData from '../../data/books.json'assert { type: "json" };
const recordsData = require('../../data/records.json');

const getRecordById = (id) => {
  return recordsData.records.find(record=> record.id === id);
}

//export default getRecordById;
module.exports = getRecordById;

Books API

Base URL - https://api-books-node.herokuapp.com/

GET - /books - Get all books
GET - /book/:id - Get book of specific id
DELETE - /book/:id - Delete book of specific id

POST - /book - Create new book
{
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  numberPages: {
    type: Number,
    require: false
  },
  publisher: {
    type: String,
    require: false
  }
}

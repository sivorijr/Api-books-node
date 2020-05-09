Books API

Base URL - https://api-books-node.herokuapp.com/

GET - /books - Get all books<br>
GET - /book/:id - Get book of specific id<br>
DELETE - /book/:id - Delete book of specific id<br>

POST - /book - Create new book<br>
book = {<br>
  title: {
    type: String,
    require: true
  },<br>
  author: {
    type: String,
    require: true
  },<br>
  numberPages: {
    type: Number,
    require: false
  },<br>
  publisher: {
    type: String,
    require: false
  }<br>
}

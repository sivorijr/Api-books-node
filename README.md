Books API

Base URL - https://api-books-node.herokuapp.com/

GET - /books - Get all books<br>
GET - /book/:id - Get book of specific id<br>
DELETE - /book/:id - Delete book of specific id<br>

POST - /book - Create new book<br>
{<br>
  title: {<br>
    type: String,<br>
    require: true<br>
  },<br>
  author: {<br>
    type: String,<br>
    require: true<br>
  },<br>
  numberPages: {<br>
    type: Number,<br>
    require: false<br>
  },<br>
  publisher: {<br>
    type: String,<br>
    require: false<br>
  }<br>
}

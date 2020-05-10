const Book = require("../models/Book");

class BookController {
    async getAll(req, res) {
        const books = await Book.find().populate({
            path: "data",
            options: { sort: { createdAt: -1 } }
        });

        return res.json(books);
    }

    async set(req, res) {
        var newBook = {
            title: req.body.title,
            author: req.body.author,
            numberPages: req.body.numberPages,
            publisher: req.body.publisher
        }

        const book = await Book.create(newBook);

        return res.json(book);
    }

    async get(req, res) {
        const book = await Book.findById(req.params.id);

        return res.json(book);
    }

    async delete(req, res) {
        await Book.findByIdAndDelete(req.params.id);

        return res.send("Book deleted with success");
    }
}

module.exports = new BookController();
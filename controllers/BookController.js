const Book = require("../models/Book");

class BookController {
    async getAll(req, res) {
        try {
            const books = await Book.find().populate({
                path: "data",
                options: { sort: { createdAt: -1 } }
            });

            return res.json(books);
        } catch (err) {
            next(err);
        }
    }

    async set(req, res) {
        try {
            var newBook = {
                title: req.body.title,
                author: req.body.author,
                numberPages: req.body.numberPages,
                publisher: req.body.publisher
            }

            const book = await Book.create(newBook);

            return res.json(book);
        } catch (err) {
            next(err);
        }
    }

    async get(req, res) {
        try {
            const book = await Book.findById(req.params.id);

            return res.json(book);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res) {
        try {
            await Book.findByIdAndDelete(req.params.id);

            return res.send("Book deleted with success");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new BookController();
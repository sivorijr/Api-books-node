const express = require("express");

const routes = express.Router();

const BookController = require("../controllers/BookController");

routes.get("/books", BookController.getAll);

routes.post("/book", BookController.set);
routes.get("/book/:id", BookController.get);
routes.delete("/book/:id", BookController.delete);

module.exports = routes;
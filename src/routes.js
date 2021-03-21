const express = require("express");

const routes = express.Router();

const BookController = require("../controllers/BookController");

routes.get("/", (req, res) => { return res.send("BOOKS API by Sivori Junior") });
routes.get("/health", (req, res) => { return res.send("OK") });

routes.get("/books", BookController.getAll);

routes.post("/book", BookController.set);
routes.get("/book/:id", BookController.get);
routes.delete("/book/:id", BookController.delete);

module.exports = routes;

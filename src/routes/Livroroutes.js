import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros)
routes.get("/livros/:id", LivroController.getLivroById)
routes.post("/livros/", LivroController.postLivro)
routes.put("/livros/:id", LivroController.putBook)
routes.delete("/livros/:id", LivroController.deleteBook)
export default routes;
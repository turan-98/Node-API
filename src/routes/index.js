import express from "express";
import livros  from './Livroroutes.js';

const routes = (app) => {
 app.route("/").get((req,res) => res.status(200).send(
    "Curso Node.js"));
    app.use((express.json(), livros));
}
export default routes;
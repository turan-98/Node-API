import express from "express";
import livros  from './Livroroutes';

const routes = (app) => {
 app.route("/").get((req,res) => res.status(200).send(
    "Curso Node.js"));
    app.use((express.json(), livros))
}
export default routes;
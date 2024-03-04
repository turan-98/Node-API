import  express  from "express";
import connectDB from "./config/dbConnect.js";
import livro from "../src/models/Livro.js"
import routes from "./routes/index.js";


const connection = await connectDB();

connection.on("error", (err) => {
    console.error("Deu ruim ",err);
})

connection.once("open", () =>{
    console.log("Conexão estabelecida")
})

const app = express();
app.use(express.json());

//buscando por parametro
app.get("/livros/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    res.status(200).json(livros[index]);
})
/*
app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro criada mlk")
})
*/
// atualizando
app.put("/livros/:id", (req,res) => {
    const index = searchBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
})

app.delete("/livros/:id", (req,res) => {
    const index = searchBook(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
})

export default app;

// ideia de projeto criar page que envia artigos ou posts
import  express  from "express";
const app = express();

//middleware
app.use(express.json())

const livros = [
    {
        id:1,
        titulo: "Pipoca"
    },
    {
        id:2,
        titulo:"Pipoca doce"
    }
]

function searchBook(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get('/', (req,res) => {
    res.status(200).send("Rodando liso");
});

//buscando por parametro
app.get("/livros/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    res.status(200).json(livros[index]);
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros)
});

app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro criada mlk")
})

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
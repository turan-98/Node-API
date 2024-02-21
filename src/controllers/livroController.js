import Livro from "../models/Livro.js"

class LivroController{
    // static é para usar métodos de uma classe sem utilizar a palavra reservada "new"
    static async listarLivros(req, res){
        // .find() método de buscar, como não passamos parametro algum ele vai retornar tudo.
        const arrLivros = await livro.find({});
        res.status(200).json(arrLivros)
    }

    static async postLivro(req,res){
        try{
            // método para realizar o POST
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message:"criado com sucesso", livro:novoLivro});
        }catch(erro){
            res.status(500).json({message:`${erro.message}`})
        }
    }
}
export default LivroController;
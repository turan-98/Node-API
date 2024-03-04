import Livro from "../models/Livro.js"


class LivroController{
    // static é para usar métodos de uma classe sem utilizar a palavra reservada "new"
    static async listarLivros(req, res){
        try {
            // .find() método de buscar, como não passamos parametro algum ele vai retornar tudo.
            const arrLivros = await Livro.find({});
            res.status(200).json(arrLivros)
        } catch (error) {
           res.status(500).json({message: `${erro.message} falha na requisição`})
        }
        
    }
    static async getLivroById(req, res){
        try {
            const id = req.params.id;
            const getBook = await Livro.findById(id);
            res.status(200).json(getBook)
        } catch (error) {
           res.status(500).json({message: `${erro.message} falha na requisição do livro`})
        }
    }

    static async postLivro(req,res){
        try{
            // método para realizar o POST
            const novoLivro = await Livro.create(req.body);
            res.status(201).json({message:"criado com sucesso", Livro:novoLivro});
        }catch(erro){
            res.status(500).json({message:`${erro.message}`})
        }
    }

    static async putBook(req, res){
        try {
            const id = req.params.id;
            await Livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"livro atualizado!"})
        } catch (error) {
           res.status(500).json({message: `${erro.message} falha na requisição method Put`})
        }
    }

    static async deleteBook(req, res){
        try {
            const id = req.params.id;
            await Livro.findByIdAndDelete(id);
            res.status(200).json({message:"livro deletado!"})
        } catch (error) {
           res.status(500).json({message: `${erro.message} falha na requisição method Put`})
        }
    }

}
export default LivroController;
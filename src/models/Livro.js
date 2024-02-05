import mongoose from "mongoose";

//define estrutura e propriedades do objeto.
const livroSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required:true},
    editora:{type:String},
    preco:{type:Number},
    paginas:{type:Number}
}, {versionKey:false});

                        //collection   //schema
const livro = mongoose.model("livros", livroSchema);

export default livro;
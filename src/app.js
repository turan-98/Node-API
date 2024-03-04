import  express  from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";



const connection = await connectDB();

connection.on("error", (err) => {
    console.error("Deu ruim ",err);
})

connection.once("open", () =>{
    console.log("Conexão estabelecida")
})

const app = express();
app.use(bodyParser.json());
routes(app);



export default app;
// ideia de projeto criar page que envia artigos ou posts
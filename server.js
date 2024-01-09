import http from "http";

const PORT = 3000;

const routes = {
    "/": "Home",
    "/contact": "Contato"
};

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log("Executando na porta http://localhost:3000")
})
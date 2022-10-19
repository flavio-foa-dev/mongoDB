const http = require('http');

const rotas = {
  "/": "Curso de REST",
  "/book": "Pagina de Livros",
  "/author": "Paginas de Autores"
}

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, {'Content-Type': "text/plain"});
  res.end(rotas[req.url])
})





server.listen(3030, ()=> console.log("rodando na porta 3030"))
const express = require('express');
const server = express();
const PORT = 3001;
const router = require ("../src/Routes/index")


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json())
server.use("/rickandmorty", router)


server.listen(PORT, () => {
   console.log(`Server raised in port ${PORT}`);
});








// HTTP //
// const http = require ('http')
// const PORT = 3001
// const getCharById = require ('../Controllers/getCharById')

// http.createServer((req, res) => {
// res.setHeader('Access-Control-Allow-Origin', '*');

// const {url} = req;
// console.log(`Recibi un request de ${url}`)

// if(url.includes ("/rickandmorty/character/")){
//     const id = Number (url.split("/").pop())
//     getCharById(res, id)
// }

// }).listen(PORT, () =>{
//     console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
// })



// WEB SERVER HW // 
// if (url === "/"){
//     res.writeHead(200, {"Content-Type": "text/plain"})
// return res.end("Esta funcionando OK")
// }

// if (url.includes("/rickandmorty/character")){
//     const id = Number (url.split("/").pop())
//     const character = data.find(char => char.id === id)
//     console.log(character)

//     if (character){
//         res.writeHead(200, {"Content-Type": "application/json"})
//         return res.end(JSON.stringify(character))
//     } else {
//         res.writeHead(404, {"Content-Type": "application/json"})
//     return res.end(JSON.stringify({error: "Character not found"}))
//     }

// }
// res.writeHead(404, {"Content-Type": "text/plain"})
// return res.end(`La direccion ${url} no existe`) 
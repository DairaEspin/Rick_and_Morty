const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (res, id) => {
    axios (`${URL}/${id}`)
    .then(response => {
     const { id, name, gender, species, origin, image, status} =
     response.data

     res.writeHead (200, {"Content-Type": "application/json"});
     res.end(JSON.stringify ({ id, name, gender, species, origin, image, status}))
    })
    .catch(error => {
        res.writeHead(500, {"Content-Type": "text/plain"} )
        res.end(error.message)
    })
}

module.exports = getCharById;
const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try{
    const {id} = req.params
    const {data} = await axios (`${URL}/${id}`);
    const { name, gender, species, origin, image, status} = data;
   const character = { id, name, gender, species, origin, image, status};
   name ? res.json (character)
   : res.status(400).json({message : "Not Found"})
    } catch (error) {
        res.status(500).json({message : error})

    }
}


// PROMISES //
// const getCharById = (req, res ) => {
//     const { id } = req.params
//     axios (`${URL}/${id}`)
//     .then(({data}) => {
//         const { id, name, gender, species, origin, image, status} = data
//         const character = { id, name, gender, species, origin, image, status}

//         name ? res.json (character)
//         : res.status(400).json({message : "Not Found"})
//     })
//     .catch((error) => {
//         res.status(500).json({message : error})

//     })
// }


// HTTP //
// const getCharById = (res, id) => {
//     axios (`${URL}/${id}`)
//     .then(response => {
//      const { id, name, gender, species, origin, image, status} =
//      response.data

//      res.writeHead (200, {"Content-Type": "application/json"});
//      res.end(JSON.stringify ({ id, name, gender, species, origin, image, status}))
//     })
//     .catch(error => {
//         res.writeHead(500, {"Content-Type": "text/plain"} )
//         res.end(error.message)
//     })
// }

module.exports = getCharById;
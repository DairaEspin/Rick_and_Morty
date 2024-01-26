const { Favorite } = require("../src/DB_connection");

const getFav = async (req, res) => {
  try {
    const listaFav = await Favorite.findAll();
    res.status(200).json(listaFav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getFav;


// let myFavorites = [];

// const postFav = (req, res) => {
//     let {id} = req.body
//     const findRepeat = myFavorites.find(char => char.id === id)
//     if (findRepeat){
//         return res.status(400).json({error: "Ya seleccionaste este personaje"})
//     }
//     myFavorites.push(req.body)
//     res.json(myFavorites)
// }

// const deleteFav = (req, res) => {
//     const { id } = req.params
//     const filtered = myFavorites.filter(fav => fav.id !== Number(id))
//     myFavorites = filtered
//     res.json(myFavorites)
// }

// module.exports ={
//     postFav,
//     deleteFav
// }
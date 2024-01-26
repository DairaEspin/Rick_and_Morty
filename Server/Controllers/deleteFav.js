const { Favorite } = require("../src/DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const exFav = await Favorite.findOne({ where: { id } });
    await exFav.destroy();
    const listaFavs = await Favorite.findAll();
    if (listaFavs) {
      res.status(200).json(listaFavs);
    } else {
      res
        .status(401)
        .json({ message: "No se ha encontrado el id proporcionado..." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body)
    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    const filtered = myFavorites.filter(fav => fav.id !== Number(id))
    myFavorites = filtered
    res.json(myFavorites)
}

module.exports ={
    postFav,
    deleteFav
}
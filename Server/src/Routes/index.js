const router = require ("express").Router()

const login = require ("../Controllers/login")
const getCharById = require ("../Controllers/getCharById")
const { postFav, deleteFavs, deleteFav }= require ("../Controllers/handleFavorites")


router.get("/character/:id",getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete( "/fav/:id", deleteFav)


module.exports = router

const router = require("express").Router();

const login = require("../Controllers/login");
const getCharById = require("../Controllers/getCharById");
const deleteFav = require("../Controllers/deleteFav");
const postFav = require("../Controllers/postFav");
const postUser = require("../Controllers/postUser");
const getFav = require("../Controllers/handleFavorites");

router.get("/character/:id", getCharById); 
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/fav", getFav);

module.exports = router;
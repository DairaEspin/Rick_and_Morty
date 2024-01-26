const { User } = require("../src/DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      res.status(400).json("Faltan datos");
    } else {
      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        if (password === findUser.password) {
          res.status(200).json({ access: true });
        } else {
          res.status(403).json("Contraseña incorrecta");
        }
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
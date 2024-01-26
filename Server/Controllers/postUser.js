const { User } = require("../src/DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      res.status(400).json("Faltan datos");
    } else {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { password },
      });
      if (created) {
        res.status(201).json({ message: "¡Usuario creado exitosamente!", user });
      } else {
        res.status(200).json({ message: "Usuario existente.", user });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
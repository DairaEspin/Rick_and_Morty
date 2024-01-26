const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // origin: {
      //   name: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //   },
      // },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        defaultValue: "Alive",
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
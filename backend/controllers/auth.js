const Users = require("../models/users");

const login = async (req, res) => {
  const { emailOrUsername, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email: emailOrUsername });

    if (!existingUser) {
      return res.status(400).json({
        message: "User not exists!",
      });
    }

    if (password === existingUser.password) {
      return res.status(200).json({
        existingUser,
      });
    }

    res.status(401).json({
      message: "Incorrect password",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to login",
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  if (!name || !email || !username || !password) {
    return res.status(400).json({
      message: "All fields are Mandatory!",
    });
  }
  try {
    const existingUserByMail = await Users.findOne({ email });
    if (existingUserByMail) {
      return res.status(400).json({
        message: "User with this email id already exists",
      });
    }

    const existingUserByUsername = await Users.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    const user = await Users.create({
      name,
      email,
      username,
      password,
    });

    res.status(201).json({
      name: user.name,
      email: user.email,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to add user to the database!",
    });
  }
};

module.exports = { login, createUser };

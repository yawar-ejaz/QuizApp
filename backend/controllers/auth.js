const jwt = require("jsonwebtoken");
const Users = require("../models/users");

const login = async (req, res) => {
  const { emailOrUsername, password } = req.body;
  try {
    const existingUser = await Users.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!existingUser) {
      return res.status(400).json({
        message: "No such user exists",
      });
    }

    if (password === existingUser.password) {
      const token = jwt.sign(
        {
          email: existingUser.email,
          username: existingUser.username,
          name: existingUser.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        token,
      });
    }

    res.status(401).json({
      message: "Incorrect password",
    });
  } catch (error) {
    console.log(error);
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

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to add user to the database!",
    });
  }
};

module.exports = { login, createUser };

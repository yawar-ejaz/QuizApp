const login = async (req, res) => {
  const { emailOrUsername, password } = req.body;
//   console.log("reached login controller");
//   console.log("emil = ", emailOrUsername);
//   console.log("pass = ", password);
  res.status(200).json({
    success: true,
    message: "Login successful",
  });
};

const createUser = async (req, res) => {
  const { name, email, username, password } = req.body;
    // console.log("emil = ", email);
    // console.log("pass = ", password);
    // console.log("user = ", username);
    // console.log("name = ", name);
  res.status(201).json({
    success: true,
    message: "User created successfully.",
  });
};

module.exports = { login, createUser };

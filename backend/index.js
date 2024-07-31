require("dotenv").config();
const express = require("express");
const auth = require("./routes/auth");
const cors = require("cors");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_ADDRESS
}));

app.use("/auth", auth);

const startServer = () => {
    try {
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`);
        })
    }
    catch (error) {
        console.log(error);
    }
}
startServer();
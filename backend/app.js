const express = require("express");
require("dotenv").config();
const app = new express();
const connectDB = require('./connect');
const passport = require("passport");
const { initializingpassport } = require("./passportConfig.js")
const expressSession = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const routes = require("./routes/admin");
const PORT = process.env.PORT || 5000;
const ejs = require("ejs");
const cors = require("cors");
const { getlogin } = require("./controllers/admin");

app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    credentials: true, // Include cookies or other credentials in the request
}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/admin", getlogin);

initializingpassport(passport);


const Start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected!`);
        });
    } catch (error) {
        console.log(error);
    }
}


Start();


const jwt = require("jsonwebtoken");
const passport = require("passport");

const getlogin = (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: "An error occurred" });
        }
        if (!user || user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1h" });
        res.json({ token });
    })(req, res);
};

module.exports = { getlogin };

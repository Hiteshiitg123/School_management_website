const express = require("express");
const router = express.Router();
const { getlogin } = require("../controllers/admin");

// router.post("/", getlogin);
// // router.get("/",(req,res)=>{
// //   res.render("login");
// // });

router.route("/").post(getlogin);

module.exports = router;

const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");

// router.get("/", (req,res) => {
//   res.send("hey its the auth")
// })

//Register
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "Josd",
    email: "Josd@example.com",
    password: "123456"
  })
  await user.save();
  res.send("ok")
  
});

// user.save()
//     .then(() => {
//       res.send("ok");
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send("error");
//     });

 
module.exports = router
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// // app.post("/api/posts", (req, res) => {
// //   const data = req.body;
// //   res.status(200).json({ message: "Received data", data });
// // });

// //REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     //generate new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     //create new user
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPassword,
//     });

//     //save user and respond
//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

// //LOGIN
// // router.post("/login", async (req, res) => {
// //   try {
// //     const user = await User.findOne({ email: req.body.email });
// //     !user && res.status(404).json("user not found");

// //     const validPassword = await bcrypt.compare(req.body.password, user.password)
// //     !validPassword && res.status(400).json("wrong password")

// //     res.status(200).json(user)
// //   } catch (err) {
// //     res.status(500).json(err)
// //   }
// // });
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) {
//       return res.status(400).json({ message: "Invalid password" });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
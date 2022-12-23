const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const registerRouter = require('./router/registerRouter');
const fs = require('fs');
//const auth = require("./modules/authModule");
const mongo = require("./connect");

dotenv.config();
mongo.connect();
const app = express();
// to parse req.body, to send the req.body from client to server
app.use(express.json());

app.use(cors({
  origin: "https://zingy-biscotti-fcd882.netlify.app/",
}))
// app.use(cors({
//   origin: "http://localhost:3000/",
// }))
//app.use("/", (req, res, next) => {
//   // Authentication
//   var auth = {
//     authorised: true,
//   };
//   if (auth.authorised) {
//     console.log("Authorised");
//     next();
//   } else {
//     console.log("Not Authorised");
//     res.send({ msg: "Not Authorised" });
//   }
// });

//app.use("/", auth.authenticateUser);
//app.use("/register", registerRouter);
fs.readdirSync('./router').map((r) => app.use("/api", require(`./router/${r}`)));

//app.listen(process.env.PORT);
app.listen(process.env.PORT,()=>console.log('connected to server',process.env.PORT))

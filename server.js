const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

const canonicalDomain1 = process.env.CAN1;
const canonicalDomain2 = process.env.CAN2;

// app.use((req, res, next) => {
//   // Check if the host matches the canonical domain
//   console.log(req.headers.host, canonicalDomain1, canonicalDomain2, `https://${canonicalDomain1}${req.url}`)
//   if (req.headers.host !== canonicalDomain1 || req.headers.host !== canonicalDomain2) {
//     // Redirect to the canonical domain using a permanent redirect (301)
//     res.redirect(301, `https://${canonicalDomain1}${req.url}`);
//   } else {
//     next();
//   }
// });

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { page: "Home", status: "active" });
});

app.get("/projects", (req, res) => {
  res.render("about", { page: "About", status: "active" });
});

app.listen(port, () => {
  console.log(`Server up at ${port}`);
});

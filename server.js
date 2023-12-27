const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

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

const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');

const path = require('node:path');
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// lets us parse form data into req.body
app.use(express.urlencoded({ extended: true }));
const messages = require('./models/messages.js');

// Routes
app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

const msgRouter = require('./routes/msgRouter');
app.use("/new", msgRouter);

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
  });
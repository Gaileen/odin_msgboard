const messages = require('../models/messages.js');
const { Router } = require('express');
const msgRouter = Router();

msgRouter.get("/", (req, res) => {
    res.render("form");
});

msgRouter.post("/", (req, res) => {
    const form = req.body;
    messages.push({ text: form.msg_text, user: form.author_name, added: new Date() });
    res.redirect("/");
});

module.exports = msgRouter;
const express = require("express")
const { getAllURLs, AddURL } = require("../Controllers/UrlController.js")
const URLRouter = express.Router();

URLRouter.get('/getAllUrls', getAllURLs);
URLRouter.post('/AddURL', AddURL);

module.exports = URLRouter;
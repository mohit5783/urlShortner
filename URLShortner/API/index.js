const express = require("express")

const cors = require('cors')
const app = express()
var URLRouter = require('./Routes/URLRoute.js')

app.use(cors());
app.use(express.json());

app.use('/api', URLRouter);

app.listen(5000, () => console.log("Listening to port 5000"));

module.exports = app;
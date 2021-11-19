const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require("./server/config/mongoose.config");

// require('dotenv').config()

app.use(cors())

app.use(express.json(), express.urlencoded({ extended: true }));



const AllMyRandomRoutes = require("./server/routes/random.routes");
AllMyRandomRoutes(app);


app.listen(8000, () => {console.log("Listening at Port 8000")})



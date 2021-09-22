const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();



const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

const  URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopologyL: true,
    // useFindAndModify: false,
})

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongo db connection success");
})

const todoRouts = require("./routers/todos");

app.use("/todos", todoRouts);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
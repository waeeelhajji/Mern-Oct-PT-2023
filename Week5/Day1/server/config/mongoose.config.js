// import Mongoose here in the config of the DB

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mernnov202")
    .then(() => { console.log("Establish a connection to database 🎈🎈🎈") })
    .catch((err) => {
        console.log("Something went wrong when the connecting to the database", err)
    })

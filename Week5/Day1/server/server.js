const express = require("express")
const app = express()
const PORT = 5000;


// ----MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }))

require("./config/mongoose.config");


app.listen(PORT, () => {
    console.log(`>>>> the server is running on PORT ${PORT}`)
})
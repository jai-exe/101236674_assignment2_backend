const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

app.use(express.json());
const uri = "mongodb+srv://gbc:admin123@cluster0.dhvqi.mongodb.net/101236674_assignment02?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/v1", routes)

app.listen(9090, () => {console.log("Server is Running at http://localhost:9090")})

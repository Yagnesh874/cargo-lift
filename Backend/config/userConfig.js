const mongoose = require("mongoose")


mongoose.connect("mongodb://0.0.0.0:27017/CARGOLIFT")
.then(()=>console.log("Connection successfully"))
.catch(()=>console.log("Connection failed"));
const express = require("express")
const app = express();
const userConfig = require("./config/userConfig")
const userRouter = require("./router/userRouter")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/",userRouter)



app.listen(8080,()=>console.log("The server is running"));


require("dotenv").config();
const exprees = require("express");
const app = exprees();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT,()=>{
    console.log("server running in port 3000")
});

const express = require("express");
const port =2100;
const app = express();
const path = require ("path");
const staticPath=path.join(__dirname, "../public");

// build in middleware 
app.use(express.static(staticPath));
app.get("/" , (req,res) =>{
    res.send("hey welcome to express js");
    // express.static
    
});


app.get("/about", (req,res) => {
res.send("about page");
});
app.get("/navbar", (req,res) => {
    res.status(200).send("navbar page");
    });
app.listen(port ,() => {
console.log(`listening the port at ${port}`);
});
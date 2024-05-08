const express = require("express"); //importing express
const app = express(); //initializing express
const path = require("path"); //setting path
const fs = require("node:fs"); //importing fs module
const port = 3000; //setting port

app.set("view engine", "ejs"); //setting engine
path.join(__dirname, "views"); //setting path

app.use(express.static(path.join(__dirname, "public"))); //use public folder for css files and templates

app.use(express.json()); //middleware for parsing json
app.use(express.urlencoded({ extended: true })); //middleware for url encoding

app.get("/", (req, res) => { //set default home routes
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});
app.post("/create", (req, res) => { 
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.content,
    function (err) {
      res.redirect("/");
    }
  );
});
app.get("/file/:filename", function (req, res) {
  const filePath = `./files/${req.params.filename}`;
  fs.readFile(filePath, "utf-8", function (err, filedata) {
    if (err) {
      // Handle error, for example, send a 404 response
      res.status(404).send("File not found");
    } else {
      res.render("show.ejs", {
        filename: req.params.filename,
        filedata: filedata,
      });
    }
  });
});
app.get("/edit/:filename", function (req, res) {
  res.render("edit.ejs",{filename:req.params.filename})
})
app.post("/edit", function (req, res) {
  fs.rename(`./files/${req.body.prev}`,`./files/${req.body.new}`,function(err){
    res.redirect("/")
  })
})
app.get("/delete/:filename", function (req, res) {
  res.render("delete.ejs",{filename:req.params.filename})
})
app.post("/delete/:filename", function (req, res){
  fs.unlink(`./files/${req.params.filename}`,function(err){
    res.redirect("/")
  })
})
app.listen(port, (req, res) => {
  console.log(`server running at ${port}`);
});

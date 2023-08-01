const express = require("express");
const path = require("path");
const fileUpload = require('express-fileupload');
const http = require("http");


const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(fileUpload());
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.post('/upload', async (req, res) => {
    if (req.files) {
        var file = req.files.file;
        var filename = file.name;
        file.mv("./uploads/" + filename, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send("File uploaded successfully!");
            }
        });
    } else {
        res.status(400).send("No file selected.");
    }
});

const url = "http:localhost:3000/post";


http.get(url, function (response) {
    let posts = "";
  
    response.on("data", function (data) {
      posts += data.toString();
    });
  
    response.on("end", function () {
      console.log(posts.length);
      console.log(posts.toString());
    });
});

app.listen(process.env.PORT || 3001, () => console.log("Server running..."));

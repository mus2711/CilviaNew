import express from "express";

const port = process.env.PORT || 8080;
const app = express();

//several paths set here dealing with POST and get calls from client
//individually.

app.use("/", express.static("cilviastudios"));
app.listen(port, function () {
    console.log("Listening to port " + port);
});
app.use(express.json({limit: "20mb"}));

console.log("running node.js");
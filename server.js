var express = require("express");
var app = express();

// Phuong thuc get() phan hoi mot GET Request
// app.get("/", function (req, res) {
//   console.log("GET Request");
//   res.send("Hello GET");
// });

// app.get("/about", function (req, res) {
//   console.log("about Request");
//   res.send("Hello about");
// });

// // Phuong thuc post() phan hoi mot POST Request
// app.post("/", function (req, res) {
//   console.log("POST Request");
//   res.send("Hello POST");
// });

// // Phuong thuc delete() phan hoi mot DELETE Request.
// app.delete("/delete", function (req, res) {
//   console.log("DELETE Request");
//   res.send("Hello DELETE");
// });

// // Phuong thuc nay phan hoi mot GET Request có dạng abcd, abxcd, ab123cd, ...
// app.get("/ab*cd", function (req, res) {
//   console.log("GET request /ab*cd");
//   res.send("Page Pattern Match");
// });

// express.static để phục vụ cho các file tĩnh như hình ảnh, css, js, ...
app.use(express.static("public"));

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function (req, res) {
  // Chuan bi output trong dinh dang JSON
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(
    "Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s",
    host,
    port
  );
});

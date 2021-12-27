var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// const mongoose  = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);
// const fileShchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   size: Number
// });
// const File = mongoose.model("URL",fileShchema);

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single('upfile'), function(req,res){
  //'upfile' html input field name attribute
  //using multer:
  res.json({name: req.file.originalname, type:req.file.mimetype, size: req.file.size});
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

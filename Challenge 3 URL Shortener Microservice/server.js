require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose  = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const urlShchema = new mongoose.Schema({
  original_url: String,
  short_url: String,
});
const Url = mongoose.model("URL",urlShchema);


const urlencodedParser  = bodyParser.urlencoded({extended: false});
app.post("/api/shorturl", urlencodedParser , async function(req,res){
  const url = req.body.url; //html input field name attribute
  if(!isValidHttpUrl(url)){
    res.json({ error: 'invalid url' });
  }
  else{
    let data = await Url.findOne({original_url:url});
    
      if(!data){
        //create url in database
        const getDBLenght = await Url.countDocuments({}); 
        const newUrl = new Url({
          original_url: url,
          short_url: getDBLenght + 1
        })
        newUrl.save();
        res.json({original_url: newUrl.original_url, short_url: newUrl.short_url})
      }
      else{
        console.log("else")
        //return existing url
        res.json({ original_url: data.original_url, short_url: data.short_url})
      }
    }
})

app.get("/api/shorturl/:short_url", async function(req,res){
  let data = await Url.findOne({short_url: req.params.short_url});
  
    if(!data){
      console.log(err);
    }
    else{
      res.redirect(data.original_url);
    }
 
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

// const isValidUrl = (url) => {
//   try {
//     new URL(url);
//   } catch (e) {
//     console.error(e);
//     return false;
//   }
//   return true;
// };

function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
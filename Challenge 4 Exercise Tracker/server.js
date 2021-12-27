const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const bodyParser = require('body-parser');

const mongoose  = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

let userSchema = new mongoose.Schema({
   username: { type: String, required: true }
 });
let User = mongoose.model('User', userSchema);

const urlencodedParser  = bodyParser.urlencoded({extended: false});
app.post("/api/users",urlencodedParser, function(req,res){
  const inputName = req.body.username //html
  const newUser = new User({username: inputName});
  newUser.save();
  res.json({username: newUser.username, _id: newUser.id});
})

app.get("/api/users", async function(req,res){
  const allUsers = await User.find({});

    if(!allUsers) return console.log(err);
    let usersArr = [];
    allUsers.map(user => {
      usersArr.push({username: user.username, _id:user.id})
    })
    return res.send(usersArr)
  })

let exerciseSchema = new mongoose.Schema({
   userId: { type: String, required: true },
   description: String,
   duration: Number,
   date: String
 });
let Exercise = mongoose.model('Exercise', exerciseSchema);

app.post("/api/users/:_id/exercises",urlencodedParser, async function(req,res){
  
  let userFound = await User.findOne({_id: req.params._id});

  const newExe = new Exercise({
    userId: req.params._id,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date)? new Date(req.body.date).toDateString() : new Date().toDateString()
  });

  newExe.save();
    
  res.json({
    username: userFound.username,
    _id: userFound._id,
    description: newExe.description,
    duration: newExe.duration,
    date: newExe.date
  })
})

app.get("/api/users/:_id/logs",async function(req,res){
  let userFound = await User.findOne({_id: req.params._id});
  let logs = [];
  let exercisesFound = await Exercise.find({userId: userFound._id}).limit(Number(req.query.limit)).select('description duration date');
  // console.log(exercisesFound)

  if(req.query.from){
    exercisesFound.filter(exobj => new Date(exobj.date) > new Date(req.query.from))
  }
  if(req.query.to){
    exercisesFound.filter(exobj => new Date(exobj.date) < new Date(req.query.to))
  }

  exercisesFound.map(exobj => {
    logs.push(exobj.toJSON());
  })
  // console.log(logs);

 res.json({
   username: userFound.username,
   _id: userFound.id,
   log: logs,
   count: logs.length,
 })
  
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

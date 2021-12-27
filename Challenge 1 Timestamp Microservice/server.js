// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// api/1451001600000
// app.get(`/api/:unix(\\d{13})`, function(req, res) {
//   res.send({ unix: parseInt(req.params.unix), utc: unixToDate(req.params.unix) });
// })

// api/2015-12-25 with variations
// app.get("/api/:year(\\d{4}):separatorOne(-|\/| ):month([a-zA-Z]+|0?[1-9]|1[012]):separatorTwo(-|\/| ):day(0?[1-9]|[12][0-9]|3[01])", function(req, res) {
//   const fullDate = req.params.year+req.params.separatorOne+req.params.month+req.params.separatorTwo+req.params.day;
//   res.json({ unix: parseInt(dateToUnix(fullDate)), utc: unixToDate(dateToUnix(fullDate)) });
// })

const unixRegex = /\d{13}/;
const dateRegex = /^\d{4}[-|\/| ]([a-zA-Z]+|0?[1-9]|1[012])[-|\/| ](0?[1-9]|[12][0-9]|3[01])$/;
app.get('/api/:date', function(req,res){
  const input = req.params.date;
   if(!Date.parse(req.params.date) && !Number(req.params.date)){
    res.json({error: "Invalid Date"});
  }
  else if(unixRegex.test(input)){
     res.json({ unix: Number(input), utc: unixToDate(Number(input)) });
  }
  else{
    res.json({ unix: Number(dateToUnix(input)), utc: unixToDate(dateToUnix(input)) });
  }
})

// api/
app.get(`/api`, function(req, res) {
  let date = new Date();
  res.send({ unix: date.getTime(), utc: date.toUTCString()});
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


// helper functions

function dateToUnix(date) {
  return new Date(date).getTime();
}

function unixToDate(unixTimestamp) {
  dateObj = new Date(parseInt(unixTimestamp));
  // console.log(dateObj.toLocaleString());
  return dateObj.toUTCString("en-US", { weekday: "short", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC", timeZoneName: "short", hour12: false })
}

// console.log(unixToDate(1451001600000));
// console.log(dateToUnix("2015-12-25"));
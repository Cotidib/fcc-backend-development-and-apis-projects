# fcc-backend-development-and-apis-projects
freeCodeCamp Back End Development and APIs Certification Projects

## [Challenge 1: Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

#### Example Usage: 
* [project url]/api/2015-12-25
* [project url]/api/1451001600000

#### Example Output:
```{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}```

#### The challenge:
A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

Your project can handle dates that can be successfully parsed by new Date(date_string)

If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key

An empty date parameter should return the current time in a JSON object with a utc key

#### Resources
* [How to convert Unix timestamp to time in JavaScript?](https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/)
* [Convert a Unix Timestamp to a Date in Vanilla JavaScript](https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript#create-date-object)
* [Express routes parameter conditions](https://stackoverflow.com/questions/11258442/express-routes-parameter-conditions)
* [Regex Routes in Express.js](https://www.kevinleary.net/regex-route-express/)
* [Regex for Dates (YYYY-MM-DD)](https://regexland.com/regex-dates/)
* [Regular expression for a url in node.js express routing](https://stackoverflow.com/questions/37894725/regular-expression-for-a-url-in-node-js-express-routing)

#### Source Code
https://replit.com/@Cotidib/boilerplate-project-timestamp#server.js

## [Challenge 2: Request Header Parser Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

#### Example Usage: 
* [base url]/api/whoami

#### Example Output:
```{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}```

#### The challenge:
A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.

A request to /api/whoami should return a JSON object with your preferred language in the language key.

A request to /api/whoami should return a JSON object with your software in the software key.

#### Resources
* [How to Get User’s IP Details in Express](https://codeforgeek.com/how-to-get-users-ip-details-in-express/)
* [How can I get the browser language in node.js (express.js)?](https://stackoverflow.com/questions/11845471/how-can-i-get-the-browser-language-in-node-js-express-js)
* [Express.js req.ip is returning ::ffff:127.0.0.1](https://stackoverflow.com/questions/29411551/express-js-req-ip-is-returning-ffff127-0-0-1)

#### Source Code
https://replit.com/@Cotidib/boilerplate-project-headerparser#server.js

## [Challenge 3: URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

#### Example
```Example: POST [project_url]/api/shorturl - https://www.google.com```

#### Example Usage: 
[this_project_url]/api/shorturl/3
will Redirect to: https://forum.freecodecamp.org/

#### The challenge:
You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

#### Resources
* [Simple URL validation with Javascript](https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5)
* [Check whether a string is valid HTTP URL](https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)
* [Find and Count elements of collection with Mongoose](https://stackoverflow.com/questions/35443821/find-and-count-elements-of-collection-with-mongoose)
* [Model.estimatedDocumentCount()](https://mongoosejs.com/docs/api.html#model_Model.estimatedDocumentCount)
* [MongoDB countDocuments() is returning an object, not a number](https://stackoverflow.com/questions/60009431/mongodb-countdocuments-is-returning-an-object-not-a-number)

#### Source Code
https://replit.com/@Cotidib/boilerplate-project-urlshortener#server.js

## [Challenge 4: Exercise Tracker](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker)

#### Example Usage:

* Create a New User: ```POST /api/users```
* Add exercises: ```POST /api/users/:_id/exercises```
* GET user's exercise log: ```GET /api/users/:_id/logs?[from][&to][&limit]```
* ```[ ]``` = optional
* from, to = dates (yyyy-mm-dd); limit = number

Your responses should have the following structures:

Exercise:
```
{
  username: "fcc_test"
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```
User:
```
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```
Log:
```
{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```

Hint: For the date property, the toDateString method of the Date API can be used to achieve the expected output.

#### Tests

You can POST to /api/users with form data username to create a new user.

The returned response from POST /api/users with form data username will be an object with username and _id properties.

You can make a GET request to /api/users to get a list of all users.

The GET request to /api/users returns an array.

Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.

You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.

The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.

You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.

A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.

A GET request to /api/users/:id/logs will return the user object with a log array of all the exercises added.

Each item in the log array that is returned from GET /api/users/:id/logs is an object that should have a description, duration, and date properties.

The description property of any object in the log array that is returned from GET /api/users/:id/logs should be a string.

The duration property of any object in the log array that is returned from GET /api/users/:id/logs should be a number.

The date property of any object in the log array that is returned from GET /api/users/:id/logs should be a string.. Use the dateString format of the Date API.

You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.

#### Resources
* [Get full list of users](https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users/24137519)
* [How find works in mongoose](https://thecodebarbarian.com/how-find-works-in-mongoose.html)

#### Source Code
https://replit.com/@Cotidib/boilerplate-project-exercisetracker#server.js

## [Challenge 5: File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

#### Example Output:
```{"name":"image.jpg","type":"image/jpeg","size":29291}```

#### The challenge:
You can submit a form that includes a file upload.

The form file input field has the name attribute set to upfile.

When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

HINT: You can use the multer npm package to handle file uploading.

#### Resources:
* [Multer](https://www.npmjs.com/package/multer)

#### Source Code
https://replit.com/@Cotidib/boilerplate-project-filemetadata#server.js

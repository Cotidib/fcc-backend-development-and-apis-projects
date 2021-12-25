# fcc-backend-development-and-apis-projects
freeCodeCamp Back End Development and APIs Certification Projects

### [Challenge 1: Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

##### Example Usage: 
* [project url]/api/2015-12-25
* [project url]/api/1451001600000

##### Example Output:
```{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}```

#### The challenge:
A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

Your project can handle dates that can be successfully parsed by new Date(date_string)

If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key

An empty date parameter should return the current time in a JSON object with a utc key

##### Resources
* [How to convert Unix timestamp to time in JavaScript?](https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/)
* [Convert a Unix Timestamp to a Date in Vanilla JavaScript](https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript#create-date-object)
* [Express routes parameter conditions](https://stackoverflow.com/questions/11258442/express-routes-parameter-conditions)
* [Regex Routes in Express.js](https://www.kevinleary.net/regex-route-express/)
* [Regex for Dates (YYYY-MM-DD)](https://regexland.com/regex-dates/)
* [Regular expression for a url in node.js express routing](https://stackoverflow.com/questions/37894725/regular-expression-for-a-url-in-node-js-express-routing)

##### Source Code
https://replit.com/@Cotidib/boilerplate-project-timestamp#server.js

### [Challenge 2: Request Header Parser Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

##### Example Usage: 
* [base url]/api/whoami

##### Example Output:
```{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}```

#### The challenge:
A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.

A request to /api/whoami should return a JSON object with your preferred language in the language key.

A request to /api/whoami should return a JSON object with your software in the software key.

##### Resources
* [How to Get User’s IP Details in Express](https://codeforgeek.com/how-to-get-users-ip-details-in-express/)
* [How can I get the browser language in node.js (express.js)?](https://stackoverflow.com/questions/11845471/how-can-i-get-the-browser-language-in-node-js-express-js)
* [Express.js req.ip is returning ::ffff:127.0.0.1](https://stackoverflow.com/questions/29411551/express-js-req-ip-is-returning-ffff127-0-0-1)

##### Source Code
https://replit.com/@Cotidib/boilerplate-project-headerparser#server.js

### [Challenge 3: URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

#### Example
```Example: POST [project_url]/api/shorturl - https://www.google.com```

Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function dns.lookup(host, cb) from the dns core module to verify a submitted URL.

##### Example Usage: 
[this_project_url]/api/shorturl/3
will Redirect to: https://forum.freecodecamp.org/

##### The challenge:
You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

##### Resources

### [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

#### Example
```Example: POST [project_url]/api/shorturl - https://www.google.com```

Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function dns.lookup(host, cb) from the dns core module to verify a submitted URL.

##### Example Usage: 
[this_project_url]/api/shorturl/3

##### Will Redirect to:
https://forum.freecodecamp.org/

##### The challenge:
You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.

If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

##### Resources
* [Simple URL validation with Javascript](https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5)
* [Check whether a string is valid HTTP URL](https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)
* [Find and Count elements of collection with Mongoose](https://stackoverflow.com/questions/35443821/find-and-count-elements-of-collection-with-mongoose)
* [Model.estimatedDocumentCount()](https://mongoosejs.com/docs/api.html#model_Model.estimatedDocumentCount)
* [MongoDB countDocuments() is returning an object, not a number](https://stackoverflow.com/questions/60009431/mongodb-countdocuments-is-returning-an-object-not-a-number)
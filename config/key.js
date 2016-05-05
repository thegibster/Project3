var request = require("request-promise");
// var Promise = require("bluebird");
// var Request = Promise.promisify(require('request'));
// var currentToken={};

//setting options for http request
var options = { method: 'POST',
url: 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13',
headers:
{ 'content-type': 'application/x-www-form-urlencoded',
'postman-token': 'afd89d7e-6194-82fb-43b5-05ef6cc66339',
'cache-control': 'no-cache' },
form:
{ client_id: '9WdP3',
client_secret: 'xLBCiO/4V7Gy5cQ6A+SKbhJ59Jx5E/Nkui6LqILroJQ=',
scope: 'http://api.microsofttranslator.com',
grant_type: 'client_credentials' }
};

// request(options, function (error, response, body) {
  // if (error) throw new Error(error);
  // console.log("inside the promise");
  // return  currentToken.accessToken= body.split(",")[1].toString().split(":")[1];
  // console.log(body);
  //get the string key from the call as it is a string in return body
  // console.log(body.split(",")[1].toString().split(":")[1]);
  // currentToken.accessToken;
  // console.log(currentToken.accessToken);
  // console.log("after all");

// });
//exporting a function called new
//which makes the http request and returns a promise
module.exports.new = function() { return request(options);}

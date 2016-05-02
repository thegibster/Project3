var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://datamarket.accesscontrol.windows.net/v2/OAuth2-13",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "ef0bb77e-e7e6-65f6-face-8f45de71696c",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "client_id": "9WdP3",
    "client_secret": "xLBCiO/4V7Gy5cQ6A+SKbhJ59Jx5E/Nkui6LqILroJQ=",
    "scope": "http://api.microsofttranslator.com",
    "grant_type": "client_credentials"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

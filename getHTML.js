
const https = require('https');

function getHTML (options, callback) {

  var httpResponseData = "";
  https.get(options, (response) => {
    response.setEncoding("utf8");
    response.on('data', (chunk) => {
      httpResponseData += chunk;
    });
    response.on('end', () => {
      callback(httpResponseData);
    });
  })
}

function printHTML (html) {
  console.log(html);
}

 const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  }

getHTML(requestOptions, printHTML);
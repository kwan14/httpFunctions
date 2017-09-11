
const https = require('https');

function getAndPrintHTML () {
  const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  };
  var httpResponseData = "";
  https.get(requestOptions, (response) => {
    response.setEncoding("utf8");
    response.on('data', (chunk) => {
      httpResponseData += chunk;
    });
    response.on('end', () => {
      console.log(httpResponseData);
    })
  })
}

getAndPrintHTML();



const https = require('https');

function getAndPrintHTML (options) {

  var httpResponseData = "";
  https.get(options, (response) => {
    response.setEncoding("utf8");
    response.on('data', (chunk) => {
      httpResponseData += chunk;
    });
    response.on('end', () => {
      console.log(httpResponseData);
    })
  })
}

 const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  }

getAndPrintHTML(requestOptions);

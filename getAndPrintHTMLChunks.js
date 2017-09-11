
const https = require("https");

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      console.log((chunk += "\n"));
    });
  })
}

getAndPrintHTMLChunks();
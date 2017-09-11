
const https = require('https');

module.exports = function getHTML (options, callback) {

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
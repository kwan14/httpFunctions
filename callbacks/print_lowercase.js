
var getHTML = require("./http-functions");

const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  }

function printLowerCase (html) {
  //console.log(typeof(html));
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);

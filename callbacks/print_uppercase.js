
var getHTML = require("./http-functions");

const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  }

function printUpperCase (html) {
  //console.log(typeof(html));
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);

var getHTML = require("./http-functions");

const requestOptions = {
    host : "sytantris.github.io",
    path : "/http-examples/step2.html"
  }

function printReverse (html) {
  console.log(typeof(html));
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);
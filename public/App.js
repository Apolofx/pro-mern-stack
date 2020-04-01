"use strict";

var continents = ["tuvieja", "mivieja", "lavieja de el", "y anda a cagar"];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
}).join(" ");
var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", {
  className: "h1"
}, helloContinents));
ReactDOM.render(element, document.getElementById("content"));
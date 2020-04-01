const continents = ["tuvieja", "mivieja", "lavieja de el", "y anda a cagar"];
const helloContinents = Array.from(continents, c => `Hello ${c}!`).join(" ");

const element = (
  <div title="Outer div">
    <h1 className="h1">{helloContinents}</h1>
  </div>
);
ReactDOM.render(element, document.getElementById("content"));

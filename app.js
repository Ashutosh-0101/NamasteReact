// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello world  from React"
//     );
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "hello from h1"),React.createElement("h2", {}, "hello from h2")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
   [ React.createElement("h1", {}, "hello from h1"),React.createElement("h2", {}, "hello from h2")]
  )]
);

console.log(parent); //return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

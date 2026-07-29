import React from "react";
import ReactDOM from "react-dom/client";

// React Element -> End of the its a object
const heading = React.createElement(
  "h1",
  { id: "headerId" },
  "Namste React 🚀🚀",
);
// when we render this to DOM then it becomes its HTML

console.log(heading);

//JSX => Babel will transpile into => React.createElement => ReactElement - JS Object => HTML Element (render) - Its HTML LIKE or XML like syntax
const jsxHeading = (
  <h1 id="intHeaderId" className="heading">
    Namaste React 🚀🚀 Using JSX
  </h1>
);
//JSX -> Converted to React.Element Behind the scenes

// React Components
//	1. Class Based components => Old way of writting the component
//	2. Functional Components  => New way of writting the component

const obj = <h1>Hello world</h1>;

//Title Component
const Title = () => <h1>Namaste React 🚀🚀🚀🚀</h1>;

// React Fucntional Component : its a just a normal javascript function which returns the JSX element
// Component composition => Put one component to another component
const total = 10 + 20;
const Heading = () => {
  return (
    <>
      <Title />
      {/* //or we Can write it in */}
      <Title></Title>
      {/* At the end of the everything is JS function so we can call like function */}
      {Title()}
      Sum of 10 and 20 is {total}
      {obj}
      <h1>Welcome to React Functional Component</h1>
    </>
  );
};

const Header1 = () => (
  <h1 className="header">Welcome to React Compoenent from Compoenent</h1>
);

//Create Root Element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the heading to DOM
root.render(<Heading />);

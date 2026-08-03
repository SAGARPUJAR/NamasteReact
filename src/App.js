import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};



//Create Root Element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the heading to DOM
root.render(<AppLayout />);

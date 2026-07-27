import React from "react";
import ReactDOM from "react-dom/client"

const header = React.createElement('h1', {}, "Hello world from React CDN");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
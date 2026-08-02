import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
/*
    Header
        - Logo
        - Nav Items
    Body
        - Search
        - Resturent Container
            - Resto Card
    Footer
        - Copyright 
        - Links
        - Address
        - Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://e7.pngegg.com/pngimages/926/744/png-clipart-803-food-delivery-llc-restaurant-delivery-food-food-eating.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contract Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    resId: 1,
    resName: "Meghana Foods",
    cusines: ["Biryani", "North Indian", "South Indian"],
    avgRating: "3.8",
    costForTwo: "₹400 For Two",
  },
  {
    resId: 2,
    resName: "KFC",
    cusines: ["Chicken", "Burger"],
    avgRating: "3.4",
    costForTwo: "₹1000 For Two",
  },
  {
    resId: 3,
    resName: "McDonald's",
    cusines: ["Chicken", "Burger"],
    avgRating: "2.4",
    costForTwo: "₹500 For Two",
  },
  {
    resId: 4,
    resName: "Dominos",
    cusines: ["Pizza", "Burger", "Chicken"],
    avgRating: "4.4",
    costForTwo: "₹800 For Two",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cusines, avgRating, costForTwo } = resData;
  console.log(resData);
  return (
    <div style={{ backgroundColor: "#f0f0f0f0" }} className="res-card">
      <img
        className="res-logo"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/8/30/0c394307-621b-4499-8d2c-19c88a221cf5_image01900ee3f119343d2b35697131496aefc.JPG"
      />
      <h3>{resName}</h3>
      <h4>{cusines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-containers">
        {resList.map((res) => (
          <RestaurantCard key={res.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};

//Create Root Element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the heading to DOM
root.render(<AppLayout />);

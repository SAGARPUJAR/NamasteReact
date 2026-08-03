import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [resListData, setResList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          id="filter-dtn"
          onClick={() => {
            const filteredData = resListData.filter((res) => res.avgRating > 3.5);
            setResList(filteredData);
            console.log("button Clicked");
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-containers">
        {resListData.map((res) => (
          <RestaurantCard key={res.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

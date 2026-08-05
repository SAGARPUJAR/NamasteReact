import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListData, setResList] = useState(resList);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9568868&lng=77.52002089999999&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await response.json();

      const restaurants =
        // Optional Chaining to safely access nested properties and avoid errors if any part of the chain is undefined or null
        json?.data?.cards?.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2",
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const formattedRestaurants = restaurants.map((restaurant) => ({
        ...restaurant.info,
        id: restaurant.info.id,
      }));

      setResList(formattedRestaurants);
      setFilteredRestaurants(formattedRestaurants);
    } catch (error) {
      console.error("Failed to load restaurants:", error);
      setResList(resList);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResult = resListData.filter((res) => {
                const name = (res.resName || res.name || "").toLowerCase();
                return name.includes(inputText.toLowerCase());
              });

              setFilteredRestaurants(filteredResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          id="filter-dtn"
          onClick={() => {
            const filteredData = resListData.filter(
              (res) => Number(res.avgRating) > 4.3,
            );
            setResList(filteredData);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="res-containers">
          {filteredRestaurants.map((res) => (
            <RestaurantCard key={res.id || res.resId} resData={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

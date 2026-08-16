import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStaus from "../utils/useOnlineStaus";

const Body = () => {
  const [resListData, setResList] = useState(resList);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnlineStaus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9568868&lng=77.52002089999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
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

  if (!isOnline) {
    return <h1>You are offline !!</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        {/* <div className="search">
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
        </div> */}
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="Search for restaurants..."
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
          className="search-btn"
          id="filter-dtn"
          onClick={() => {
            const filteredData = resListData.filter(
              (res) => Number(res?.avgRating) > 4.4,
            );
            setFilteredRestaurants(filteredData);
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
            <Link
              className="card-link"
              to={`/restaurant/${res.id || res.resId}`}
              key={res.id || res.resId}
            >
              {" "}
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

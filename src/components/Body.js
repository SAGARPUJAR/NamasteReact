import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStaus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resListData, setResList] = useState(resList);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnlineStaus();
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

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

      const formattedRestaurants = restaurants.map((restaurant, index) => ({
        ...restaurant.info,
        id: restaurant.info.id,
        promoted: index % 2 === 0, // Mark every second restaurant as promoted
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
      <div className="filter flex">
        <div className="search-container p-4 m-4">
          <input
            className="search-input border border-gray-300 rounded-lg p-2 mr-2 w-100"
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="Search for restaurants..."
          />

          <button
            className="px-4 py-2 btn-primary bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
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
        <div className="search-container p-4 m-4">
          <button
            className="px-4 py-2 btn-primary bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
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
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="search-input border border-gray-300 rounded-lg p-2 mr-2 w-100"
            type="text"
            placeholder="User Context"
          />
        </div>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="res-containers flex flex-wrap">
          {filteredRestaurants.map((res) => (
            <Link
              className="card-link"
              to={`/restaurant/${res.id || res.resId}`}
              key={res.id || res.resId}
            >
              {res.promoted ? (
                <PromotedRestaurantCard resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

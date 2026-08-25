import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const restaurantId = resId || "1005688";

  useEffect(() => {
    fetchMenu(restaurantId);
  }, [restaurantId]);

  const fetchMenu = async (restaurantId) => {
    try {
      const menuUrl = new URL("https://www.swiggy.com/dapi/menu/pl");
      menuUrl.search = new URLSearchParams({
        "page-type": "REGULAR_MENU",
        "complete-menu": "true",
        lat: "12.9568868",
        lng: "77.52002089999999",
        restaurantId,
        catalog_qa: "undefined",
        submitAction: "ENTER",
      });

      const res = await fetch(
        `https://corsproxy.io/?url=${encodeURIComponent(menuUrl.toString())}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Menu data:", data);

      setResInfo(data);
    } catch (error) {
      console.log("Failed to fetch restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
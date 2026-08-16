import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu(resId);
  }, [resId]);

  const fetchMenu = async (resId) => {
    try {
      const res = await fetch(
        `https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9568868&lng=77.52002089999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
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
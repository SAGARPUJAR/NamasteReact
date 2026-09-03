import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);
  const [resDetails, setResDetails] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9568868&lng=77.52002089999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
      console.log(menuUrl);
      try {
        const response = await fetch(menuUrl);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setResDetails(data.data?.cards[2]?.card?.card?.info);
        console.log(data.data?.cards[2]?.card?.card?.info);
        const menuCards =
          data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;

        setResInfo(menuCards);
      } catch (error) {
        console.log("Failed to fetch restaurant menu:", error);
      }
    };

    fetchMenu();
  }, []);

  console.log(resDetails);

  const categories = resInfo.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  console.log("Categories:", categories);

  useEffect(() => {
    if (resInfo) {
    }
  }, [resInfo]);
  const {
    name = "Restaurant",
    costForTwoMessage = "",
    avgRatingString = "",
    sla = {},
    cuisines = [],
  } = resDetails;
  return (
    <>
      <div className="text-center">
        <h2 className="font-bold text-2xl my-6">{name}</h2>
        <p className="font-black text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}{" "}
        </p>
        <h3 className="font-black text-lg">{sla.slaString || ""}</h3>
        <h2 className="font-black text-lg">Menu</h2>
        {categories.map((cat, index) => (
          <ResCategory
            key={`${cat.card?.card?.title || "category"}-${index}`}
            data={cat.card?.card}
            showItem={index === showIndex}
            setShowIndex={() =>
              setShowIndex((currentIndex) =>
                currentIndex === index ? null : index,
              )
            }
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;

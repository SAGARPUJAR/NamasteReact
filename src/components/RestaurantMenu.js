import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // const result = useState(0);
  // console.log(result);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const res = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9568868&lng=77.52002089999999&restaurantId=72996&catalog_qa=undefined&submitAction=ENTER",
  //   );

  //   console.log(res);
  // };
  return (
    <>
      <h2>Restaurant Name {resId}</h2>
      <p>4.3 ⭐⭐⭐⭐ Rs.200 for Two</p>
      <h3>10Min delivery</h3>
      <h2>Menu</h2>
      <ul>
        <li>Paneer Butter Masala</li>
        <li>Butter Chicken</li>
        <li>Palak Paneer</li>
      </ul>
    </>
  );
};

export default RestaurantMenu;

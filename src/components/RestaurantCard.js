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

export default RestaurantCard;

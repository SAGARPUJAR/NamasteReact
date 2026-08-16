const RestaurantCard = (props) => {
  const { resData } = props;

  const restaurantName = resData?.name || resData?.resName;
  const cuisines = resData?.cuisines || resData?.cusines || [];
  const avgRating = resData?.avgRating || resData?.avgRatingString || "NA";
  const costForTwo = resData?.costForTwo || "NA";
  const locality = resData?.locality || "";
  const areaName = resData?.areaName || "";
  const imageId = resData?.cloudinaryImageId;
  const imageUrl = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/${imageId}`
    : "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/8/30/0c394307-621b-4499-8d2c-19c88a221cf5_image01900ee3f119343d2b35697131496aefc.JPG";

  return (
    <div style={{ backgroundColor: "#f0f0f0f0" }} className="card">
      <div className="card-content">
        <img className="card-img" src={imageUrl} alt={restaurantName} />
        <h3 className="card-title">{restaurantName}</h3>
        <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h4>
        <h4 className="card-rating">⭐ {avgRating}</h4>
        <h4 className="card-price">{costForTwo}</h4>
        <p className="card-description">
          {locality}
          {locality && areaName ? " • " : ""}
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

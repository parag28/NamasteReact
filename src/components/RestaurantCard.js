import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;

  // Now you can access sla.deliveryTime directly
  const deliveryTime = resData?.info.sla?.deliveryTime;

  // You can also use destructuring to extract deliveryTime directly
  // const { deliveryTime } = sla || {};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="no img"
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;

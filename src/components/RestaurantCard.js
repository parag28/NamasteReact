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
    <div className="m-4 p-4 w-[250px] h-[470px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg w-90 h-60"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="no img"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

//Higher Order Component
// input - RestaurantCard ==> output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

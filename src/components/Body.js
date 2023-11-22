import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
  // State Variable = Super powerful variable =>> Hooks - useState / useEffect
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //   const arr = useState(resList);
  //   listOfRestaurants = arr[0];
  //   setListOfRestaurants = arr[1];

  //   normal JS variable
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "717389",
  //         name: "Dominos",
  //         cloudinaryImageId: "257508279a8ed217b14b01bee97ba9a1",
  //         costForTwo: "₹200 for two",
  //         cuisines: ["Snacks"],
  //         avgRating: 4.2,
  //         avgRatingString: "4.2",
  //         sla: {
  //           deliveryTime: 41,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "717312",
  //         name: "Rolls Mania",
  //         cloudinaryImageId: "d01fafb12c4ab095255735a724c80d72",
  //         costForTwo: "₹120 for two",
  //         cuisines: ["Snacks"],
  //         avgRating: 3.2,
  //         avgRatingString: "3.2",
  //         sla: {
  //           deliveryTime: 23,
  //         },
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredData); //whenever state Variable changes, React re-renders component
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          // map-filter-reduce
          // Not using keys(not acceptable ) <<<< index as key <<<<<<< Unique id (best practice)
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  // State Variable = Super powerful variable =>> Hooks - useState / useEffect
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4529322&lng=73.86523799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // //////////////////
  const onlineStatus = useOnlineStatus();
  console.log("hi" + onlineStatus);
  if (onlineStatus === false)
    return <h1>Looks like you are not connected to internet;</h1>;
  // //////////////////
  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    console.log("no data yet");
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;

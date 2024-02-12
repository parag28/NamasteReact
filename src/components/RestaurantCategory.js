import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div
        className="mx-auto w-6/12 my-6 shadow-xl p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

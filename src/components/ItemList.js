import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - Rs. {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            {item.card?.info?.imageId ? (
              <>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                  alt="img"
                />
                <button
                  className="absolute bottom-0 left-0 p-2 bg-white shadow-xl"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </>
            ) : (
              <div className="flex justify-center">
                <button
                  className="p-2 bg-white shadow-xl"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

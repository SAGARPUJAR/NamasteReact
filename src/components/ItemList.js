import React from "react";
import { imgURL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => {
        const itemData = item?.card?.info ?? item;
        const itemId = itemData?.id || itemData?.card?.info?.id || `${index}`;
        const itemName = itemData?.name || "Item";
        const itemDescription = itemData?.description || "";
        const itemPrice = itemData?.price
          ? itemData.price / 100
          : itemData?.defaultPrice
            ? itemData.defaultPrice / 100
            : 0;
        const itemImage = itemData?.imageId
          ? imgURL + itemData.imageId
          : "";

        return (
          <div
            key={`${itemId}-${index}`}
            className="m-2 flex justify-between gap-4 border-b-2 p-4 text-left"
          >
            <div className="py-2 flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800">{itemName}</h3>
              <p className="mt-1 font-medium text-gray-700">₹ {itemPrice}</p>
              <p className="mt-2 text-xs text-gray-500 line-clamp-2">
                {itemDescription}
              </p>
            </div>
            <div className="relative shrink-0 pb-4">
              {itemImage && (
                <img
                  src={itemImage}
                  className="w-32 h-24 object-cover rounded-lg"
                  alt={itemName}
                />
              )}
              {showAddButton && (
                <button
                  type="button"
                  onClick={() => handleAddItem(item)}
                  className="absolute bottom-0 left-1/2 inline-flex min-w-24 -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md border border-green-700 bg-green-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-green-700 cursor-pointer"
                >
                  ADD +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

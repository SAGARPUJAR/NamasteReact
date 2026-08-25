import React from "react";
import { imgURL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}
          className="m-2 flex justify-between gap-4 border-b-2 p-4 text-left"
        >
          <div className="py-2 flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="mt-1 font-medium text-gray-700">
              {" "}
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="mt-2 text-xs text-gray-500 line-clamp-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative shrink-0 pb-4">
            <img
              src={imgURL + item.card.info.imageId}
              className="w-32 h-24 object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute bottom-0 left-1/2 inline-flex min-w-24 -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md border border-green-700 bg-green-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-green-700 cursor-pointer"
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

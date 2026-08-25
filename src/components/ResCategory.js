import React, { useState } from "react";
import ItemList from "../components/ItemList";

const ResCategory = ({ data, showItem, setShowIndex }) => {
  //   const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    //setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList key={data.id} items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;

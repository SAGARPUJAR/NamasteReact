import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart?.items ?? []);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const itemData = item?.card?.info ?? item;
    const itemPrice = itemData?.price
      ? itemData.price / 100
      : itemData?.defaultPrice
        ? itemData.defaultPrice / 100
        : 0;
    return total + itemPrice;
  }, 0);

  return (
    <div className="m-5 p-5 text-center">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="m-auto w-full max-w-3xl">
        {cartItems.length === 0 ? (
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-600">
            <h1>Cart is Empty, Add Items to the cart</h1>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-end">
              <button
                onClick={handleClearCart}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Clear Cart
              </button>
            </div>

            <ItemList items={cartItems} showAddButton={false} />

            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹ {totalAmount.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-lg cursor-pointer bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-green-700"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

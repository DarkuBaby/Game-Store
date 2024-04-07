import React from "react";
import useCartStore from "../store/cartStore";

const RemoveFromCart = ({id}) => {

  const removeFromCart = useCartStore((state)=> state.removeFromCart);

  return (
    <button
      className="hover:text-gray-400"
      onClick={() => {
        removeFromCart(id);
      }}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;

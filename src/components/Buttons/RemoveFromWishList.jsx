import React from "react";
import useWishListStore from "../store/wishListStore";

const RemoveFromWishList = ({ id }) => {

  const removeFromWishList = useWishListStore((state)=> state.removeFromWishList);

  return (
    <button
      className="hover:text-gray-400"
      onClick={() => {
        removeFromWishList(id)
      }}
    >
      Remove
    </button>
  );
};

export default RemoveFromWishList;

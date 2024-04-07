import React from "react";
import useCartStore from "../store/cartStore";


const AddToCart = ({id, name, price, imgSrc}) => {

const addToCart = useCartStore((state)=> state.addToCart);
// const message = useCartStore((state)=> state.message);
// console.log(message);
const item = {
  id,
  name,
  price,
  imgSrc,
};


  return (
    <button 
    className="bg-lime-600 px-3 py-1 w-[100%] text-gray-100 hover:bg-lime-500 lg:w-auto"
    onClick={()=>{
      addToCart(item); 
     }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;

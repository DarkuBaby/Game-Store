import React from 'react'
import useWishListStore from '../store/wishListStore'

const AddToWishList = ({id, name, price, imgSrc}) => {

const addToWishList = useWishListStore((state)=> state.addToWishList);

const item = {
  id: id,
  name: name,
  price: price,
  imgSrc: imgSrc,
};

  return (
    <button
     className="bg-sky-900 px-3 py-1 w-[100%]  hover:bg-sky-500 lg:w-auto"
     onClick={()=>{ addToWishList(item)}}
     >
      Add to Wishlist
    </button>
  )
}

export default AddToWishList
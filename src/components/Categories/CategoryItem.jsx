import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category, slug, startColor, imgURL }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top, ${startColor}, transparent 40%), url(${imgURL})`,
  };

  return (
    <Link to={`/category/${slug}`} onClick={()=> window.scrollTo(0,0)}>
      <div
        style={gradientStyle}
        className={`flex items-end justify-center w-[200px] h-[200px] transition-transform duration-200 ease-out hover:scale-105 pb-5 bg-cover bg-center`}
      >
        <div className=" text-xl text-center font-semibold capitalize">{category}</div>
      </div>
    </Link>
  );
};

export default CategoryItem;

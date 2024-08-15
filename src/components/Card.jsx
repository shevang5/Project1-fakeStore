import React from "react";
import { Link } from "react-router-dom";
// import Details from "./Details";

function Card({ values }) {
  const { image, title, price, category, id } = values;
  

  return (
    <Link
      to={`/details/${id}`}
      className="w-48 h-64  bg-white rounded-md text-left p-2  flex flex-col items-center "
    >
      <img className="h-32 py-2" src={image} alt="" />
      <div className="text-left py-2">
        <h1 className=" h-5 text-sm font-bold w-full overflow-x-hidden overflow-y-hidden ">
          {title}
        </h1>
        <p>${price}</p>
        <h2 className=" w-full h-6 overflow-y-hidden overflow-x-hidden">
          category: {category}
        </h2>
      </div>
      
    </Link>
  );
}

export default Card;


import axios from "../utils/Axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const [singleProduct, setSingleProduct] = useState(null);
  const {id} = useParams();
  console.log(id);
  


  const getSingleProduct = async()=>{
    try {
      const {data} = await axios.get(`/products/${id}`)
      setSingleProduct(data);
      console.log(data);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  useEffect(()=>{
    getSingleProduct();
  },[])

  return (singleProduct? <div className="w-full h-screen py-32">
      <div className="w-full h-[80%] flex items-center justify-center ">
        <div className="w-[30vw]">
          <img
            className=" h-[30vw]"
            src={singleProduct.image}
            alt=""
            srcset=""
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center">
          <h1 className="font-bold text-3xl">{singleProduct.title}</h1>
          <p>
            {singleProduct.description}
          </p>
          <p className="text-xl">category - {singleProduct.category}</p>
          <h2 className="font-semibold text-2xl">Price: ${singleProduct.price}</h2>
          <div className="flex gap-2 pt-20">
            <button className="bg-yellow-400 px-3 py-1 rounded-md font-semibold">
              Buy
            </button>
            <button className="bg-yellow-400 px-3 py-1 rounded-md font-semibold">
              Add cart
            </button>
          </div>
        </div>
      </div>
    </div>
  :
    <Loading/>
  )
}

export default Details;

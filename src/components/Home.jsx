// import React, { useContext, useEffect, useState } from "react";
// import Card from "./Card";
// import { productContext } from "../utils/Context";
// import Loading from "./Loading";
// import { useLocation } from "react-router-dom";
// import axios from "../utils/Axios";

// function Home() {
//   const [products] = useContext(productContext);
//   // console.log(products);
//   const {search} = useLocation();
//   const category = decodeURIComponent(search.split("=")[1]);

//   const [filterProduct, setFilterProduct] = useState(null);
//   const getProductCategory = async ()=>{
//     try {
//       const {data} = await axios.get(`/products/category/${category}`);
//       setFilterProduct(data);
     
      
//     } catch (error) {
//       console.log(error);
      
//     }
//   }

//   useEffect(()=>{
//     if(!filterProduct )setFilterProduct(products);
//     if(category != "undefine")getProductCategory();
//   },[category, products]);
  

//   return (products? (
//     <div className="w-[85%] h-screen bg-zinc-300 p-4 overflow-x-hidden overflow-y-auto flex justify-center gap-4 flex-wrap ">
//       {filterProduct && filterProduct.map((p,i)=>{
        
        
//         return <Card key={i} values={p} />;
//       })}
//     </div>):(
//       <Loading/>
//     )
//   );
// }

// export default Home;


import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import axios from "../utils/Axios";
import Nav from "./Nav";

function Home() {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProduct, setFilterProduct] = useState(products);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category && category !== "undefined") {
      getProductCategory();
    } else {
      setFilterProduct(products);
    }
  }, [category, products]);

  return products ? (
    <div className="flex">
    <Nav/>
    <div className="w-[85%] h-screen bg-zinc-300 p-4 overflow-x-hidden overflow-y-auto flex justify-center gap-4 flex-wrap">
      {filterProduct && filterProduct.map((p, i) => (
        <Card key={i} values={p} />
      ))}
    </div>
    </div >
  ) : (
    <Loading />
  );
}

export default Home;

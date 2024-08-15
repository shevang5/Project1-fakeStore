import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState(null);

  const getProduct = async ()=>{
    try{
      const {data} = await axios("/products");
      setProduct(data);
      console.log(data);
    }
    catch(error){
      console.error(error);
    }
  };

  useEffect(()=>{
    getProduct();
  },[])

  return <productContext.Provider value={[product, setProduct]}>
    {props.children}
  </productContext.Provider>
}

export default Context
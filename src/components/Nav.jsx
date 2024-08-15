import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link } from 'react-router-dom';


function Nav() {
  const [products] = useContext(productContext);
  console.log(products);

  let distinctCategory = products && products.reduce((acc, cv) => [...acc, cv.category],[]);
  

  distinctCategory = [...new Set(distinctCategory)]
  console.log(distinctCategory);
  

  
  

  return (
    <div className='bg-blue-950 w-[15%] text-lg font-bold text-white flex flex-col items-center h-screen p-3'>
      <Link to="/create" className='text-white p-3  border-2 flex justify-center rounded-lg'>Add Product</Link>
      {distinctCategory.map((c,i)=>{
        return <Link to={`/?category/${c}`} key={i} >{c}</Link>
      })}
    </div>
  )
}

export default Nav
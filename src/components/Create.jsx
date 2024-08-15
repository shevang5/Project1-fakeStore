import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";

function Create() {
     const [products, setProducts] = useContext(productContext);
     const [title, setTitle] = useState("");
     const [img, setImg] = useState("");
     const [price, setPrice] = useState("");
     const [category, setCategory] = useState("");
     const [description, setDescription] = useState("");

   
     
  const addProductHandler = (e) => {
    e.preventDefault();
    const product = {
     id:nanoid(),
      title,
      img,
      price,
      category,
      description,
    };
    setProducts([...products, product]);
    console.log(products);
    
    
  };

  return (
    <div className="h-screen w-full bg-zinc-400 flex justify-center items-center">
      <form
        onSubmit={addProductHandler}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <h1 className="font-bold text-2xl">Add new product</h1>
        <input
          type="text"
          placeholder="title"
          className="w-[40vw] p-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="img-URL"
          className="w-[40vw] p-2 rounded-lg"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="price"
            className="w-[19vw] p-2 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="category"
            className="w-[20vw] p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <textarea
          placeholder="description"
          className="w-[40vw] p-2 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Add Product"
          className="w-[40vw] p-2 rounded-lg bg-blue-900 text-white font-semibold"
        />
      </form>
    </div>
  );
}

export default Create;

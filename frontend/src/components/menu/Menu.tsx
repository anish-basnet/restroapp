import React, { useEffect, useState } from "react";
import logo from "../../assets/samosa-recipe.jpg";
import { FaPlus } from "react-icons/fa6";
import "./Menu.css";
import axios from "axios";
import { useLoaderContext } from "../Loader";
type PropsType = {
  category: string;
};
type PayloadType = {
  id: number;
  description: string;
  image: string | null;
  name: string;
  price: number;
  product_id: number;
  product_type: number;
  protein_choice: string | null;
  size: number;
  spice_level: string | null;
};

type DataType = {
  payload: PayloadType[];
};

type ErrorType = {
  message: string;
};

export const ItemsList = () => {
  const { productInfo } = useLoaderContext();
  const [imageLoaded, setImageLoaded] = useState(false)
  if (productInfo && 'payload' in productInfo){
    console.log("test ", productInfo.payload['Breads'].length)
  }
  useEffect(() =>{
    const img = new Image()
    img.src = logo
    img.onload = () => setImageLoaded(true)
  }, [])
  console.log("Product Info from itemLIst ", productInfo);
  
  return (
    <div className="flex flex-col mt-3 w-full">
      {productInfo && "payload" in productInfo && imageLoaded ? (
        <>
          {
            Object.keys(productInfo.payload).map((category) => (
              <div className="flex flex-col mt- w-full">
                {
                  Array.isArray(productInfo.payload[category]) && productInfo.payload[category].length ? (
                    <>
                      <div key={category}>
                        <p className="font-bold text-3xl">{category}</p>
                      </div>
                      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mt-8">
                      {
                        productInfo.payload[category].map((product) =>(
                          <button className="w-full block">
                               <div className="relative">
                                 <img
                                  src={logo}
                                  alt="logo"
                                  className="w-full h-full object-cover border-b rounded-xl"
                                />
                                <FaPlus className="absolute top-2 right-2 text-3xl text-black border-b p-1 bg-white rounded-full" />
                                <div className="absolute  bottom-1 left-2 text-left">
                                  <p className="text-sm px-2 font-bold">
                                    <span className="bg-white rounded-lg px-2 border-b border-gray-400">
                                      ${product.price}
                                    </span>
                                  </p>
                                  <p className="text-xl px-2 font-bold text-white">
                                      {product.name}
                                  </p>
                                </div>
                              </div>
                              <div className="text-black text-sm line-clamp-2 text-left">
                                <p>
                                  {product.description}
                                </p>
                              </div>
                            </button>
                        ))
                      }
                      </div>
                    </>
                  ): null
                }
              </div>
            ))
          }
        </>
      ) : (
        ""
      )}
    </div>
  );
};

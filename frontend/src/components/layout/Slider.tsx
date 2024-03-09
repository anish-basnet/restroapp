import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "./Slider.css";
import { useLoaderContext } from "../Loader";

export type PayloadType = {
  id: number;
  category: string;
};

export type DataType = {
  payload: PayloadType[];
};

export type ErrorType = {
  message: string;
};

export const Slider = () => {
    const containerRef = useRef<HTMLUListElement>(null);
    const handleRightClick = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft +200,
          behavior: 'smooth',
        })
      }
    };
    const handleLeftClick = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft -200,
          behavior: 'smooth',
        })
      }
    };
  const {productCategories} = useLoaderContext();

  useEffect(() => {
  console.log("Product Category from slider.tsx is ", productCategories)

  }, [productCategories]);
  if (!productCategories){
    return null
  }

  return (
    <div className="flex container-flex shadow-lg">
      <IoChevronBackOutline onClick={handleLeftClick} className="text-3xl cursor-pointer" />
      {productCategories && "payload" in productCategories && Array.isArray(productCategories.payload) ? (
        <ul className="ul-scrollbar"  ref={containerRef}>
          <li className="truncate font-bold px-2 h-10 align-top text-orange-500">
            <a href={`content-0`} className="relative">
              Popular
            <span className="absolute inset-x-0 bottom-0 h-[2.5px] bg-orange-500 translate-y-4 "></span>

            </a>
          </li>
          {productCategories.payload.map((item: PayloadType) => (
            <li
              className="font-bold truncate px-2 hover:cursor-pointer"
              key={item.id}
            >
              <a href={`content-${item.id}`}>{item.category}</a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <IoChevronForwardOutline onClick={handleRightClick} className="text-3xl cursor-pointer" />
    </div>
  );
};

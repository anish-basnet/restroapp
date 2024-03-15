import React from "react";
import logo from "../../assets/samosa-recipe.jpg";
import { FaPlus } from "react-icons/fa6";

export const Items = () => {
  return (
    <div className="h-full">
      <div className="h-[250px] overflow-y-auto">
        <p className="text-3xl font-bold text-gray-600">Items</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-600">
          Compliment your Order
        </p>
      </div>
      <div className="mt-2 flex min-w-full overflow-x-auto gap-4">
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
        <button className="flex-shrink-0 w-[100px]">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] object-cover border-b rounded-xl"
            />
            <div className="relative">
              <div className="w-full absolute bottom-0 flex justify-center items-center border-b  bg-white rounded-xl">
                <FaPlus className="text-md text-black" />
                <p className="">$12.30</p>
              </div>
            </div>
          </div>
          <p className="text-black">Aloo Kulcha</p>
        </button>
      </div>
      <div className="absolute bottom-1 left-1 right-1">
        <button className="w-full p-2 rounded-xl border-2 bg-[rgb(119,82,80)] text-white hover:text-[rgb(119,82,80)] hover:bg-white hover:border-[rgb(119,82,80)]">
          Pre-Order Pickup - Min. $10
        </button>
      </div>
    </div>
  );
};

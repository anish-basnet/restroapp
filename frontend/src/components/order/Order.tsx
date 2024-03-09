import React, { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { Items } from "../layout/Items";
import axios from "axios";
import { useLoaderContext } from "../Loader";

type DataType = {
  payload: {
    id: number
    name: string
    address: string
  }
}

type ErrorType = {
  message: string
}

export const Order = () => {
  const [isDelivery, setIsDelivery] = useState(false);
  const [data, setData] = useState<null | DataType | ErrorType>(null);

  const handlePickup = () => {
    setIsDelivery(false);
    console.log(isDelivery);
  };
  const handleDelivery = () => {
    setIsDelivery(true);
    console.log(isDelivery);
  };

  const {restroInfoData} = useLoaderContext()
  return (
    <div className="w-full flex flex-col px-4">
      <div className="w-full flex items-center pt-4">
        <div className="w-1/2 flex items-center">
          <h1 className="text-3xl font-bold text-gray-600">Order</h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="border-2 bg-gray-300 rounded-xl">
            <button
              className={`text-sm font-bold  px-1 ${
                !isDelivery ? " bg-white border-2 rounded-xl" : ""
              }`}
              onClick={handlePickup}
            >
              Pickup
            </button>
            <button
              className={`text-sm font-bold px-1 ${
                isDelivery ? "bg-white border-2 rounded-xl" : ""
              }`}
              onClick={handleDelivery}
            >
              Delivery
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-2 shadow-md rounded-md">
        {!isDelivery ? (
          <div className="flex flex-col">
            <div className="flex items-center border-b">
              <IoFastFoodOutline className="w-10 text-gray-400 h-7 mr-2" />
              <div>
                <p>{restroInfoData && 'payload' in restroInfoData && 'name' in restroInfoData.payload ? restroInfoData.payload.name: 'Name of Restaurant'}</p>
                <p className="text-gray-500">{restroInfoData && 'payload'in restroInfoData && 'address' in restroInfoData.payload ? restroInfoData.payload.address: 'Address of Restaurant'}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center border-b">
                <LuClock9 className="w-10 text-gray-400 h-7 mr-2" />
                <div className="flex-grow">
                  <p>Pickup Time</p>
                  <p className="text-gray-500">Tomorrow - 12:30 PM</p>
                </div>
                <div className="block mr-5">
                  <button className="border-b rounded-lg shadow-md foucs:shadow-outline text-orange-500">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-center border-b">
              <IoIosSearch className="w-10 text-gray-400 h-7 mr-2" />
              <div className="w-full">
                <input
                  className="w-full m-3 focus:outline-none"
                  type="text"
                  placeholder="Enter delivery address"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center border-b">
                <LuClock9 className=" text-gray-400 h-7 w-10 mr-2" />
                <div className="flex-grow">
                  <p>Delivery Time</p>
                  <p className="text-gray-500">Tomorrow - 1:15 PM</p>
                </div>
                <div className="block mr-5">
                  <button className="border-b rounded-lg shadow-md foucs:shadow-outline text-orange-500">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5">
        <Items />
      </div>
    </div>
  );
};

import React, { useCallback, useState } from "react";
import { Header } from "./layout/Header";
import { Order } from "./order/Order";
import { Slider, DataType, ErrorType, PayloadType } from "./layout/Slider";
import { ItemsList } from "./menu/Menu";
import "./MainApp.css";
export const MainApp = () => {

  
  return (
    <div className="flex h-screen scrollbar-verticle">
      <div className="w-full lg:w-[62%] overflow-y-auto px-5 relative">
        <div className="sticky top-0 z-0">
          <Header/>
          <Slider />
        </div>
        <div className="mt-3 overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
          <ItemsList />
        </div>
      </div>
      <div className="lg:w-[38%] hidden lg:block border-2 shadow-md h-screen overflow-hidden fixed right-0">
        <Order />
      </div>
    </div>
  );
};

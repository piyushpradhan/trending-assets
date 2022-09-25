import React, { useEffect, useState } from "react";
import CardBackground from "./CardBackground";

function Card() {
  return (
    <div className="flex flex-col justify-center items-center w-fit">
      <div className="absolute flex flex-col justify-center items-center">
        <CardBackground />
      </div>
      <div className="relative w-full h-full flex flex-col space-y-4 justify-center items-center">
        <p className="text-labelText text-xs">Bitcoin (BTC)</p>
        <div className="w-full px-16 py-2 shadow-valueShadow rounded-2xl flex flex-row bg-valueBg space-x-2 justify-center items-center">
          <p className="text-base text-valueText ">$31,812.80</p>
          <b>
            <p className="text-xs text-changeText">+10%</p>
          </b>
        </div>
        <p className="text-labelText text-xs">Price</p>
        <div className="w-full px-16 py-2 shadow-valueShadow rounded-2xl flex flex-row bg-valueBg space-x-4 justify-center items-center">
          <p className="text-sm text-valueText">$60,000</p>
        </div>
        <p className="text-labelText text-xs">TVL</p>
      </div>
    </div>
  );
}

export default Card;

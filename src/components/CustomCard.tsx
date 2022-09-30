import React, { useEffect, useState } from "react";
import CardBackground from "./CardBackground";
import CurrencyLogo from "./CurrencyLogo";
import { Currency } from "../constants/types";
import { captureRejectionSymbol } from "stream";
import "../styles/customCard.css";

function Card({ currency }: Currency) {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <CurrencyLogo image={currency.imagePath} />
        </div>
        <div className="content">
          <div className="relative w-full h-full flex flex-col space-y-4 justify-center items-center">
            <p className="text-labelText text-xs">{currency.currencyName}</p>
            <div className="w-full py-2 shadow-valueShadow rounded-2xl flex flex-row bg-valueBg space-x-2 justify-center items-center">
              <p className="text-base text-valueText text-clip">
                {currency.value}
              </p>
              <b>
                <p className="text-xs text-changeText text-clip">
                  {currency.change}
                </p>
              </b>
            </div>
            <p className="text-labelText text-xs">Price</p>
            <div className="w-full px-16 py-2 shadow-valueShadow rounded-2xl flex flex-row bg-valueBg space-x-4 justify-center items-center">
              <p className="text-sm text-valueText">$60,000</p>
            </div>
            <p className="text-labelText text-xs mb-8">TVL</p>
            <div className="px-4 py-2 rounded-full flex flex-row bg-valueBg space-x-4">
              <img src="./images/solana.svg" alt="solana logo" />
              <img src="./images/binance.svg" alt="binance logo" />
              <img src="./images/ethereum.svg" alt="ethereum logo" />
            </div>
            <p className="text-labelText text-xs">Popular pairs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

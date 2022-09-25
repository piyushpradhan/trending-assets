import React from "react";
import "./App.css";
import Card from "./components/Card";
import { CurrencyType } from "./constants/types";

function App() {
  const bitcoin: CurrencyType = {
    imagePath: "./images/bitcoin.png",
    currencyName: "Bitcoin",
    value: "$31,812.80",
    change: "+10%",
  };
  const solana: CurrencyType = {
    imagePath: "./images/solana.svg",
    currencyName: "Solana (SOL)",
    value: "$32.83",
    change: "-12.32%",
  };
  const ethereum: CurrencyType = {
    imagePath: "./images/ethereum.svg",
    currencyName: "Ethereum (ETH)",
    value: "$1,466.45",
    change: "-11.93%",
  };
  const binance: CurrencyType = {
    imagePath: "./images/binance.svg",
    currencyName: "Binance (BIN)",
    value: "$1.00",
    change: "+0.26%",
  };
  const shiba: CurrencyType = {
    imagePath: "./images/shiba.svg",
    currencyName: "Shiba (SHIB)",
    value: "$0.00000001948",
    change: "-8.1%",
  };
  return (
    <div className="w-screen h-screen m-0 flex flex-col space-y-32 justify-center items-center">
      <div className="px-32 w-full flex flex-row justify-start items-center space-x-4">
        <img src="./images/activity.svg" alt="trending assets" />
        <p className="text-xl text-valueText">Trending assets</p>
      </div>
      <div className="px-32 flex md:flex-row flex-col w-full justify-between items-center space-x-16">
        <Card currency={bitcoin} />
        <Card currency={solana} />
        <Card currency={ethereum} />
        <Card currency={binance} />
        <Card currency={shiba} />
      </div>
    </div>
  );
}

export default App;

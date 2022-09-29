import React, { useEffect, useState } from "react";
import CardBackground from "./CardBackground";
import CurrencyLogo from "./CurrencyLogo";
import { Currency } from "../constants/types";
import { captureRejectionSymbol } from "stream";

function Card({ currency }: Currency) {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <CurrencyLogo image={currency.imagePath} />
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Card;

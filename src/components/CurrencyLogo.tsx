import React from "react";
import "../styles/currencyLogo.css";

interface Logo {
  image: string;
}

function selectCurrencyLogo(image: string) {
  switch (image) {
    case "./images/bitcoin.png":
      return (
        <img
          className="bitcoin-logo"
          src={image}
          alt="logo"
          width="40px"
          height="40px"
        />
      );
    case "./images/solana.svg":
      return (
        <img
          className="solana-logo"
          src={image}
          alt="logo"
          width="40px"
          height="40px"
        />
      );
    case "./images/ethereum.svg":
      return (
        <img
          className="ethereum-logo"
          src={image}
          alt="logo"
          width="40px"
          height="40px"
        />
      );
    case "./images/binance.svg":
      return (
        <img
          className="binance-logo"
          src={image}
          alt="logo"
          width="40px"
          height="40px"
        />
      );
    case "./images/shiba.svg":
      return (
        <img
          className="shiba-logo"
          src={image}
          alt="logo"
          width="40px"
          height="40px"
        />
      );
    default:
      return "";
  }
}

function CurrencyLogo(logo: Logo) {
  return <div className="logoContainer">{selectCurrencyLogo(logo.image)}</div>;
}
export default CurrencyLogo;

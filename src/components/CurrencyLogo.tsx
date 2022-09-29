import React from "react";
import "../styles/currencyLogo.css";

interface Logo {
  image: string;
}

function CurrencyLogo(logo: Logo) {
  return (
    <div className="logoContainer">
      <img
        className="logo"
        src={logo.image}
        alt="logo"
        width="40px"
        height="40px"
      />
    </div>
  );
}
export default CurrencyLogo;

import React from "react";

function CurrencyLogo() {
  return (
    <div className="circularLogoContainer">
      <div className="beforeCircle"></div>
      <div className="circularLogoBg"></div>
      <div className="circularLogo">
        <img
          className="bitcoinLogoImage"
          src="./bitcoin.png"
          alt="bitcoin logo"
        />
      </div>
      <div className="afterCircle"></div>
    </div>
  );
}
export default CurrencyLogo;

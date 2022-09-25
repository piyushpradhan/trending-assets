import React from "react";

interface Logo {
  image: string;
}

function CurrencyLogo(logo: Logo) {
  return (
    <div className="p-4 shadow-valueShadow flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-[#626A881A] to-[#EAB3000F]">
      <img src={logo.image} alt="logo" width="40px" height="40px" />
    </div>
  );
}
export default CurrencyLogo;

import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[316px] flex justify-center items-center max-md:h-[235px] max-sm:h-[205px]"
      style={{
        backgroundImage: `url("https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/contact/herobanner.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="font-raleway text-[64px] text-[#403F37] font-bold max-sm:text-[40px]"
        style={{
          textShadow: "2px 2px 2px 5.8px rgba(0, 0, 0, 0.54)", // Text shadow isn't directly available in Tailwind
        }}
      >
        Contact Us
      </div>
    </div>
  );
};

export default HeroSection;

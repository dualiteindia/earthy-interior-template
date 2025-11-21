const HeroSections = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[712px] w-full flex flex-col justify-center items-end "
      style={{
        backgroundImage: `url("https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/what_we_do/hero.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundRepeat:"no-repeat"
      }}
    >
      <div className="w-[51.8%] h-full  flex  items-center max-md:w-[63%] max-sm:w-full max-sm:justify-center">
        <div className="bg-[#0F0F0F] rounded-[10px] mb-20 max-sm:mb-0 max-md:mb-60 max-sm:w-[88.4%] h-full max-h-[322px] w-full max-w-[86.31%] max-md:max-w-[380px] max-md:h-[297px]  bg-opacity-[33%]  flex justify-center items-center">
          <div className="flex flex-col justify-between max-md:w-[86.64%] w-[86.96%] h-[224px]">
            <div className="font-raleway font-semibold text-[16px] text-[#FFFFFF]">New Arrivals</div>
            <div className="text-[52px] max-967px:text-[36px]  max-md:leading-[120%] leading-[65px] text-[#FFFFFF] font-semibold font-raleway">
              <span className="italic">Discover</span> our New Collection
            </div>
            <div className="font-raleway text-[18px] leading-[24px] text-[#FFFCDB] font-light">
              Experience the beauty of natural textures and sustainable finishes crafted to transform your space with
              warmth and elegance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;

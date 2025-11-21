const Experience = () => {
  return (
    <div className="w-[100%]  flex  bg-[#F8F8F8] items-center justify-center pt-[200px] pb-[112px]  max-sm:px-[0] max-md:px-[32px]">
      <div className=" flex  w-full flex-col items-center max-w-[88.89%]  max-md:max-w-[704px] gap-[90px] max-sm:gap-[46px] max-sm:max-w-[81.88%]  ">
        <div className=" w-full flex items-center justify-between max-h-[595px]  h-full space-y-[23px] max-md:flex-col">
          <div className="text-[64px] max-sm:text-center  text-left w-full max-md:text-[48px]  font-raleway font-bold text-[#000000] leading-[72px] max-sm:text-[32px] max-sm:leading-[150%] max-sm:leading-[140%] max-sm:tracking-[4%]">
            We Offer a <span className="text-[#214A3E] italic">Seamless, Thoughtful Experience</span>{" "}
          </div>
          <div className="font-raleway text-right max-md:text-left max-sm:text-center font-light text-[24px] max-sm:text-[20px]  text-[#8490A1]">
            From the moment you reach out, we guide you through materials, textures, and tailored solutions — ensuring
            every detail reflects your vision with clarity and care.
          </div>
        </div>
        <div className="flex max-sm:w-full gap-[75px] h-[380px]   max-md:flex-col max-md:h-full max-md:w-[93.6%] ">
          <div
            className="flex gap-[17px] bg-[#FFFFFF] w-full rounded-[10px] max-md:h-[289px] justify-center items-center flex-col group "
            style={{
              boxShadow: "0px 0px 5.8px rgba(0, 0, 0, 0.54)",
            }}
          >
            <div className="flex w-[81.14%] max-md:w-[92.71%] max-sm:w-[86.46%]">
              <img
                src={
                  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/what_we_do/clock.png"
                }
                className="w-[103px] h-[103px]"
              />
            </div>
            <div className="flex gap-[17px] w-[81.14%] max-md:w-[92.71%] flex-col max-sm:w-[86.46%]">
              <div className="font-raleway text-[32px] font-bold text-[#000000] leading-[150%] ">
                Our finishes are crafted to endure.
              </div>
              <div className="font-raleway text-[17px] font-light text-[#000000] leading-[150%] ">
                Claymist's natural lime and clay plasters develop strength over time, creating surfaces that age
                beautifully and stand strong for years.{" "}
              </div>
            </div>
          </div>
          <div
            className="flex gap-[17px] bg-[#FFFFFF] w-full rounded-[10px] max-md:h-[289px] justify-center items-center flex-col group"
            style={{
              boxShadow: "0px 0px 5.8px rgba(0, 0, 0, 0.54)",
            }}
          >
            <div className="flex w-[81.14%] max-md:w-[92.71%] max-sm:w-[86.46%]">
              <img
                src={
                  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/what_we_do/shipping.png"
                }
                className="w-[103px] h-[103px]"
              />
            </div>
            <div className="flex gap-[17px] w-[81.14%] max-md:w-[92.71%] flex-col max-sm:w-[86.46%]">
              <div className="font-raleway text-[32px] font-bold text-[#000000] leading-[150%] ">
                We deliver with precision and care.
              </div>
              <div className="font-raleway text-[17px] font-light text-[#000000] leading-[150%]">
                Your materials are securely packed and shipped to your location, ensuring they arrive in perfect
                condition and ready for application.{" "}
              </div>
            </div>
          </div>
          <div
            className="flex gap-[17px] bg-[#FFFFFF] w-full rounded-[10px] max-md:h-[289px] justify-center items-center flex-col group"
            style={{
              boxShadow: "0px 0px 5.8px rgba(0, 0, 0, 0.54)",
            }}
          >
            <div className="flex w-[81.14%] max-md:w-[92.71%] max-sm:w-[86.46%]">
              <img
                src={
                  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/what_we_do/wallet.png"
                }
                className="w-[103px] h-[103px]"
              />
            </div>
            <div className="flex gap-[17px] w-[81.14%] max-md:w-[92.71%] flex-col max-sm:w-[86.46%]">
              <div className="font-raleway text-[32px] font-bold text-[#000000] leading-[150%] ">
                Premium quality doesn't have to be out of reach.
              </div>
              <div className="font-raleway text-[17px] font-light text-[#000000] leading-[150%]">
                We offer sustainable, handcrafted finishes at prices that make beautiful spaces accessible to more
                creators, homeowners, and designers.{" "}
              </div>
            </div>
          </div>

          {/* <div className="flex gap-[17px] bg-[#214A3E] w-full rounded-[10px]  max-md:h-[289px] justify-center items-center flex-col ">
            <div className="flex w-[81.14%] max-md:w-[92.71%] max-sm:w-[86.46%]">
              <img src={image3} className="w-[103px] h-[103px]" />
            </div>
            <div className="flex gap-[17px] w-[81.14%]  max-md:w-[92.71%] flex-col max-sm:w-[86.46%]">
              <div className="font-raleway text-[32px] font-bold text-[#FFFFFF] leading-[150%]">
                Fast Shipping
              </div>
              <div className="font-raleway text-[17px] font-light text-[#C7D2CF] leading-[150%]">
                Short text describing one of your product or service advantages.
                Try being creative.
              </div>
            </div>
          </div>
          <div className="flex gap-[17px] bg-[#FFFFFF] w-full rounded-[10px] max-md:h-[289px]  justify-center items-center flex-col ">
            <div className="flex w-[81.14%] max-md:w-[92.71%] max-sm:w-[86.46%]">
              <img src={image2} className="w-[103px] h-[103px]" />
            </div>
            <div className="flex gap-[17px] w-[81.14%] max-md:w-[92.71%] flex-col max-sm:w-[86.46%]">
              <div className="font-raleway text-[32px]  font-bold text-[#000000] leading-[150%]">
                Affordable Prices
              </div>
              <div className="font-raleway text-[17px] font-light text-[#000000] leading-[150%]">
                Short text describing one of your product or service advantages.
                Try being creative.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;

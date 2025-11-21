import Marquee from "react-fast-marquee";

const images = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_1.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_2.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_3.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_4.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_5.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_6.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_7.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_8.png",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/claymist-earthy-interior-template/homepage/ticker_9.png",
];

const CompanyLogos = () => (
  <Marquee speed={200}>
    <div className="flex gap-[100px] items-center h-[283px]">
      <img src={images[0]} className="w-[332px] h-[93px] pl-[100px]" alt="Logo 1" />
      <img src={images[1]} className="w-[296px] h-[93px]" alt="Logo 2" />
      <img src={images[2]} className="w-[246px] h-[157px]" alt="Logo 3" />
      <img src={images[3]} className="w-[213px] h-[154px]" alt="Logo 4" />
      <img src={images[4]} className="w-[265px] h-[137px]" alt="Logo 5" />
      <img src={images[5]} className="w-[184px] h-[153px]" alt="Logo 6" />
      <img src={images[6]} className="w-[257px] h-[103px]" alt="Logo 7" />
      <img src={images[7]} className="w-[369px] h-[129px]" alt="Logo 8" />
      <img src={images[8]} className="w-[136px] h-[136px]" alt="Logo 9" />
    </div>
  </Marquee>
);

export default CompanyLogos;

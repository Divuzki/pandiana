/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";

type FeatureItemProps = {
  imageSrc: string;
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ imageSrc, text }) => (
  <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap">
    <img
      src={imageSrc}
      alt=""
      width={70}
      height={70}
      className="shrink-0 aspect-square"
    />
    <div className="my-auto max-md:max-w-full">{text}</div>
  </div>
);

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b5d4834e70744dcbe6aab1f416768e224976225c6bc8587d0241eca6db15f79c?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      text: "earning rewards",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0933ca79e14b1d138a773cd42b79321a9cc861089c8a51e4722c5e9e1a3889d3?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      text: "unlocking achievements",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef99c09e0954d5882f63451de759d187b2a5c3b29b40858c87fcf349aae0256d?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      text: "scaling new heights",
    },
  ];

  const handleTelegramClick = () => {
    window.open("https://t.me/PandianaOfficial", "_blank");
  };

  const handleFeatureSectionClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col justify-center bg-stone-300">
      <main className="flex overflow-hidden relative flex-col justify-center w-full min-h-[927px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dade41f59bb5ac70eff23c0f8ddf68a7bf6b4a50326cb861152ed787a950c3d?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="flex relative flex-col px-20 pt-20 pb-12 w-full max-md:px-5 max-md:max-w-full">
          <section className="mt-9 ml-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-5 text-white max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="self-center text-2xl font-medium leading-8 max-md:max-w-full">
                      The Real Adventure Starts Here
                    </h2>
                    <h1 className="mt-7 text-3xl font-extrabold leading-10 text-center uppercase max-md:max-w-full">
                      Join our vibrant community of $PNDA holders
                    </h1>
                  </div>
                  <div className="flex flex-col self-end mt-3 max-w-full text-lg tracking-wider leading-5 uppercase w-[462px]">
                    <button
                      onClick={handleTelegramClick}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={`flex gap-2.5 justify-center px-5 py-3 border border-white border-solid bg-white bg-opacity-20 rounded-[80px] max-md:flex-wrap transition-all duration-300 ${
                        isHovered ? "bg-opacity-30" : ""
                      }`}
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42240ab8b25074d9d900612ce1c2e8d8dba4dc2b56dafa59301f3331c26862de?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                        alt=""
                        width={36}
                        height={28}
                        className="shrink-0 aspect-[1.28]"
                      />
                      <span className="my-auto">Join telegram</span>
                    </button>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac4ce80216a648cbc18aec7251a599ddb27faa126c3b177e39ac1128514b710?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                      alt=""
                      width={296}
                      height={400}
                      className="z-10 self-end mt-0 max-w-full aspect-[0.74]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <section
                  onClick={handleFeatureSectionClick}
                  className="flex flex-col justify-center p-16 w-full text-white border border-teal-900 border-solid bg-neutral-900 bg-opacity-70 rounded-[40px] max-md:px-5 max-md:max-w-full cursor-pointer transition-all duration-300 hover:bg-opacity-80"
                >
                  <h2 className="text-3xl font-extrabold leading-10 text-center uppercase max-md:max-w-full">
                    Together, we&#39;ll carve out our niche in the digital
                    wilderness
                  </h2>
                  <div className="flex flex-col mt-8 text-2xl tracking-wider leading-9 capitalize max-md:max-w-full">
                    {features.map((feature, index) => (
                      <FeatureItem
                        key={index}
                        imageSrc={feature.imageSrc}
                        text={feature.text}
                      />
                    ))}
                  </div>
                  {clickCount > 0 && (
                    <p className="mt-4 text-center">
                      Clicked {clickCount} times!
                    </p>
                  )}
                </section>
              </div>
            </div>
          </section>
          <footer className="flex gap-5 justify-between self-center mt-20 text-xl leading-8 text-white max-md:mt-10">
            <div>©2024 Pandiana</div>
            <div>contact@pandiana.io</div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Footer;

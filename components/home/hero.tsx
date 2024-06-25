/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Props for the SocialIcon component
 */
type SocialIconProps = {
  src: string;
  alt: string;
  href: string;
};

/**
 * Renders a social media icon with a link
 */
const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <a
    title={`Visit our ${
      alt === "Social media icon 1"
        ? "Telegram"
        : alt === "Social media icon 2"
        ? "Discord"
        : "Twitter"
    } page`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={src}
      alt={alt}
      width={60}
      height={60}
      className="shrink-0 aspect-square hover:opacity-80 transition-opacity"
    />
  </a>
);

/**
 * Props for the CountdownItem component
 */
type CountdownItemProps = {
  label: string;
  value: number;
};

/**
 * Renders a single countdown item (days, hours, minutes, seconds)
 */
const CountdownItem: React.FC<CountdownItemProps> = ({ label, value }) => (
  <div className="flex flex-col grow justify-center p-3 text-center text-white whitespace-nowrap rounded-3xl max-md:px-5">
    <div className="text-xs tracking-wide leading-8 uppercase">{label}</div>
    <div className="mt-5 text-3xl tracking-widest leading-[88px]">
      {value.toString().padStart(2, "0")}
    </div>
  </div>
);

/**
 * Props for the PresaleInfo component
 */
type PresaleInfoProps = {
  label: string;
  value: string;
};

/**
 * Renders presale information
 */
const PresaleInfo: React.FC<PresaleInfoProps> = ({ label, value }) => (
  <div className="flex flex-col justify-center rounded-[40px]">
    <div className="self-center text-xl font-medium leading-6 bg-clip-text">
      {label}
    </div>
    <div className="flex flex-col justify-center mt-2 text-lg leading-6">
      <div className="bg-clip-text">{value}</div>
    </div>
  </div>
);

/**
 * Main component for the Pandiana presale page
 */
const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 12,
    minutes: 45,
    seconds: 32,
  });
  const [solAmount, setSolAmount] = useState<number>(0);
  const [pndaAmount, setPndaAmount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }
        let newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              newTime.days--;
            }
          }
        }
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /**
   * Handles changes in the SOL input field
   */
  const handleSolInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSolAmount(isNaN(value) ? 0 : value);
    setPndaAmount(isNaN(value) ? 0 : value * 50000); // Assuming 1 SOL = 50,000 PNDA
  };

  /**
   * Handles the "Buy PNDA" button click
   */
  const handleBuyPnda = () => {
    alert(`Buying ${pndaAmount} PNDA for ${solAmount} SOL`);
    // Here you would typically integrate with a wallet and make the actual purchase
  };

  return (
    <div className="flex flex-col justify-center">
      <main className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28ec8a7f1c20093de6ead8c1526e236dd3830e79254d6933ac962bc98b5ae094?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="flex relative flex-col items-center px-16 pt-20 pb-11 w-full max-md:px-5 max-md:max-w-full">
          <div className="mt-12 w-full max-w-[1177px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start max-md:mt-10 max-md:max-w-full">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a087aed668ed370846b489e1c765eac076ccacbcb6f1e7557641428da19d33a?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                    alt="Panda logo"
                    width={357}
                    height={324}
                    className="max-w-full aspect-[1.1]"
                  />
                  <div className="flex flex-col self-stretch mt-9 text-white max-md:max-w-full">
                    <h1 className="text-5xl font-extrabold uppercase leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                      Channel Your <br /> Inner Panda
                    </h1>
                    <p className="mt-3 text-xl leading-7 max-md:max-w-full">
                      Welcome to Pandiana, the next big wave in the world of
                      play-to-earn gaming. We&#39;re not just another memecoin
                      but a revolution in the blockchain gaming arena, built on
                      Solana for unmatched speed and efficiency.
                    </p>
                  </div>
                  <div className="flex flex-col mt-14 ml-3.5 max-w-full text-center w-[382px] max-md:mt-10 max-md:ml-2.5">
                    <p className="text-lg leading-6 bg-clip-text">Join us on</p>
                    <div className="flex gap-3 mt-5 text-base text-white whitespace-nowrap">
                      <SocialIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6018371bb96fc60534cfe197cbe1f34d66610ec2f46b62e4302dbd7f4a73242?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                        alt="Social media icon 1"
                        href="#"
                      />
                      <SocialIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8f9916c906167e0c704b38a6e392c34992e282b0912c279d0e4e77107cb934?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                        alt="Social media icon 2"
                        href="#"
                      />
                      <SocialIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93a2acf165b95c52892d9122a2191eabd9cbcb5f581bc22c8316fa9588ea10c?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                        alt="Social media icon 3"
                        href="#"
                      />
                      <a
                        href="#"
                        className="flex gap-2.5 justify-center px-6 py-3 border border-white border-solid bg-white bg-opacity-20 rounded-[80px] max-md:px-5 hover:bg-opacity-30 transition-colors"
                      >
                        <span>Whitepaper</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6241aa712aa4c966e0491bada28e0d4fd8a32b14dd62cc9533901acb097694?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                          alt="Whitepaper icon"
                          width={20}
                          height={20}
                          className="shrink-0 aspect-square"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 pt-8 pb-8 mt-6 w-full border border-teal-900 border-solid shadow-sm bg-neutral-900 bg-opacity-50 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col self-center text-center rounded-[30px]">
                    <h2 className="text-xl tracking-widest leading-8 uppercase bg-clip-text">
                      $PNDA TOKEN Presale
                    </h2>
                    <p className="self-center mt-1 text-2xl font-medium leading-7 bg-clip-text">
                      Starts in
                    </p>
                  </div>
                  <div className="justify-center px-3 mt-6 rounded-3xl border border-yellow-700 border-solid max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <CountdownItem label="Days" value={timeLeft.days} />
                      <CountdownItem label="Hours" value={timeLeft.hours} />
                      <CountdownItem label="Minutes" value={timeLeft.minutes} />
                      <CountdownItem label="Seconds" value={timeLeft.seconds} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center content-start px-3 mt-6 text-center">
                    <div className="flex flex-col justify-center px-14 rounded-[40px] max-md:px-5">
                      <h3 className="text-xl font-medium leading-6 bg-clip-text">
                        Presale Price
                      </h3>
                      <p className="self-center mt-2 text-lg leading-6 bg-clip-text">
                        50,000
                      </p>
                    </div>
                    <div className="flex flex-col justify-center px-14 rounded-[40px] max-md:px-5">
                      <h3 className="text-xl font-medium leading-6 bg-clip-text">
                        Listing Price
                      </h3>
                      <p className="self-center mt-2 text-lg leading-6 bg-clip-text">
                        25,000
                      </p>
                    </div>
                  </div>
                  <p className="self-center mt-6 text-2xl font-medium leading-6 text-center bg-clip-text">
                    Listing at 50% on Raydium
                  </p>
                  <div className="flex gap-5 justify-between px-3 py-2 mt-6 text-xl font-medium leading-6 text-center border border-teal-900 border-solid bg-neutral-900 bg-opacity-70 rounded-[40px] max-md:flex-wrap">
                    <div className="shrink-0 h-6 bg-yellow-500 rounded-[46.59px] w-[197px]" />
                    <p className="bg-clip-text">3400 SOL</p>
                  </div>
                  <form className="flex gap-5 justify-center mt-6 text-lg leading-6 uppercase whitespace-nowrap max-md:flex-wrap">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="solInput" className="bg-clip-text">
                        Sol
                      </label>
                      <input
                        id="solInput"
                        type="number"
                        value={solAmount}
                        onChange={handleSolInputChange}
                        className="flex flex-col justify-center p-3 mt-3 rounded-xl border border-teal-900 border-solid bg-neutral-900 bg-opacity-70 bg-clip-text text-white"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="pndaInput" className="bg-clip-text">
                        $PNDA
                      </label>
                      <input
                        id="pndaInput"
                        type="number"
                        value={pndaAmount}
                        readOnly
                        className="flex flex-col justify-center p-3 mt-3 rounded-xl border border-teal-900 border-solid bg-neutral-900 bg-opacity-70 bg-clip-text text-white"
                      />
                    </div>
                  </form>
                  <button
                    onClick={handleBuyPnda}
                    className="flex flex-col justify-center self-center p-5 mt-6 text-lg leading-6 text-center rounded-3xl border border-yellow-700 border-solid hover:bg-yellow-700 transition-colors"
                  >
                    <span className="bg-clip-text">Buy $PNDA</span>
                  </button>
                  <div className="flex flex-wrap gap-4 justify-center content-start px-3 mt-6 text-center">
                    <PresaleInfo
                      label="Presale Allocation"
                      value="($PNDA 4,000,000)"
                    />
                    <PresaleInfo
                      label="Total Supply"
                      value="($PNDA 10,000,000)"
                    />
                  </div>
                  <a
                    href="#"
                    className="self-center mt-6 text-xl font-medium leading-6 text-center text-yellow-500 hover:underline"
                  >
                    How to Buy
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;

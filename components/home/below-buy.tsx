import React, { useState } from "react";
import Image from "next/image";

/**
 * Props for the ExpeditionCard component
 */
type ExpeditionCardProps = {
  title: string;
  subtitle: string;
  tokenAmount: string;
  imageSrc: string;
  onStartExpedition: () => void;
};

/**
 * ExpeditionCard component displays information about the Pandiana Expedition
 * @param {ExpeditionCardProps} props - The props for the ExpeditionCard component
 * @returns {JSX.Element} The rendered ExpeditionCard component
 */
const ExpeditionCard: React.FC<ExpeditionCardProps> = ({
  title,
  subtitle,
  tokenAmount,
  imageSrc,
  onStartExpedition,
}) => (
  <section className="flex flex-col px-16 py-10 border border-teal-900 border-solid shadow-sm backdrop-blur-[17px] bg-neutral-900 bg-opacity-50 rounded-[40px] max-md:px-5 max-md:max-w-full">
    <h2 className="font-medium bg-clip-text leading-[100%] max-md:max-w-full">
      {title}
    </h2>
    <p className="mt-8 font-extrabold leading-10 text-white uppercase max-md:max-w-full">
      {subtitle}
    </p>
    <button
      onClick={onStartExpedition}
      className="flex flex-col justify-center self-center p-5 mt-8 text-lg leading-6 rounded-3xl border border-yellow-700 border-solid hover:bg-yellow-700 transition-colors duration-300"
    >
      <span className="bg-clip-text">{tokenAmount} $PNDA Tokens</span>
    </button>
  </section>
);

/**
 * BelowBuy is the main component for the Pandiana Expedition page
 * @returns {JSX.Element} The rendered BelowBuy
 */
const BelowBuy: React.FC = () => {
  const [isExpeditionStarted, setIsExpeditionStarted] = useState(false);

  /**
   * Handles the start of the expedition
   */
  const handleStartExpedition = () => {
    setIsExpeditionStarted(true);
  };

  return (
    <main className="flex flex-col justify-center text-2xl text-center">
      <section className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89bae2adb27bbdf9585680f58afc79cd339df69a8db3558788bcf0ae048ee156?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex relative flex-col items-center px-16 pt-20 pb-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-16 max-w-full w-[751px] max-md:mt-10">
            <ExpeditionCard
              title="Start Your Pandiana Expedition"
              subtitle="Embark on a bamboo filled journey by acquiring at least"
              tokenAmount="5000"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b65d0165dd7529bed8c88bd7de8cab92c44b864fa03b374e2dd4761cce65797?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
              onStartExpedition={handleStartExpedition}
            />
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b65d0165dd7529bed8c88bd7de8cab92c44b864fa03b374e2dd4761cce65797?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
              alt="Pandiana Expedition illustration"
              width={493}
              height={554}
              className={`z-10 self-center mt-0 max-w-full transition-transform duration-500 ${
                isExpeditionStarted ? "scale-110" : ""
              }`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BelowBuy;
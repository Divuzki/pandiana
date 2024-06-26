import React from "react";
import Image from "next/image";

type TokenAllocationProps = {
  title: string;
  amount: string;
  percentage: string;
};

/**
 * TokenAllocation component displays information about a specific token allocation.
 * @param {TokenAllocationProps} props - The properties for the TokenAllocation component.
 * @returns {JSX.Element} A section displaying token allocation information.
 */
const TokenAllocation: React.FC<TokenAllocationProps> = ({
  title,
  amount,
  percentage,
}) => (
  <section className="flex flex-col grow justify-center px-11 py-10 w-full text-center border border-teal-900 border-solid backdrop-blur-[17px] bg-neutral-900 bg-opacity-70 rounded-[40px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <h3 className="self-center text-2xl font-medium leading-6 bg-clip-text">
      {title}
    </h3>
    <div className="flex flex-col justify-center mt-8 text-xl leading-6">
      <p className="bg-clip-text">
        {percentage} ($PNDA {amount})
      </p>
    </div>
  </section>
);

/**
 * Pandanomics component displays the main page with token allocation information.
 * @returns {JSX.Element} The main Pandanomics page.
 */
const Pandanomics: React.FC = () => {
  const tokenAllocations: TokenAllocationProps[] = [
    { title: "Presale Allocation", amount: "4,000,000", percentage: "30%" },
    {
      title: "Liquidity & Exchange Listings",
      amount: "1,000,000",
      percentage: "10%",
    },
    { title: "Airdrop & Marketing", amount: "300,000", percentage: "20%" },
    { title: "Team", amount: "1,500,000", percentage: "80%" },
    {
      title: "Staking & In-Game Rewards",
      amount: "1,200,000",
      percentage: "32%",
    },
    { title: "Ecosystem & Development", amount: "500,000", percentage: "10%" },
  ];

  return (
    <main className="flex flex-col justify-center">
      <section className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89bae2adb27bbdf9585680f58afc79cd339df69a8db3558788bcf0ae048ee156?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex relative flex-col px-14 py-16 w-full max-md:px-5 max-md:max-w-full">
          <h1 className="self-center mt-2 text-3xl leading-10 text-center uppercase bg-clip-text tracking-[3.2px]">
            Pandanomics
          </h1>
          <div className="flex flex-wrap justify-center content-start items-center px-16 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap justify-center items-center max-w-full w-[881px] gap-6">
              {tokenAllocations.map((tokenAllocation, index) => (
                <div
                  key={index}
                  className="max-w-full max-md:max-w-full w-[428px] max-md:px-5"
                >
                  <TokenAllocation {...tokenAllocation} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pandanomics;

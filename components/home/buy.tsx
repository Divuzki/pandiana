/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";

/**
 * Props for the PandaCard component.
 */
type PandaCardProps = {
  imageSrc: string;
  name: string;
  onClick: () => void;
};

/**
 * Renders a card displaying a panda character.
 * @param {PandaCardProps} props - The props for the PandaCard component.
 * @returns {JSX.Element} The rendered PandaCard component.
 */
const PandaCard: React.FC<PandaCardProps> = ({ imageSrc, name, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center self-stretch p-3 my-auto text-base tracking-wider leading-5 text-center text-white rounded-xl shadow-md backdrop-blur-[9.938556671142578px] bg-zinc-800 bg-opacity-90"
  >
    <Image
      src={imageSrc}
      alt={`${name} character`}
      width={207}
      height={207}
      className="aspect-square w-[207px]"
    />
    <div className="mt-4">{name}</div>
  </button>
);

/**
 * Props for the NavigationArrow component.
 */
type NavigationArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
};

/**
 * Renders a navigation arrow button.
 * @param {NavigationArrowProps} props - The props for the NavigationArrow component.
 * @returns {JSX.Element} The rendered NavigationArrow component.
 */
const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
}) => (
  <button
    title="Navigate"
    onClick={onClick}
    className={`flex ${
      direction === "left" ? "justify-center" : "justify-center items-start"
    } self-stretch p-3 my-auto rounded-xl shadow-md bg-zinc-800 bg-opacity-90 max-md:hidden`}
  >
    <div
      className={`flex ${
        direction === "left"
          ? "flex-col justify-center items-start"
          : "justify-center items-center"
      } rounded-xl border-gray-200 border-solid border-[0.828px]`}
    >
      <Image
        src={`httpS://cdn.builder.io/ext_${direction === "left" ? "2" : "8"}-`}
        alt={`${direction} arrow`}
        width={direction === "left" ? 11 : 10}
        height={direction === "left" ? 183 : 200}
        className={`${
          direction === "left"
            ? "aspect-[0.06] w-[11px]"
            : "w-2.5 aspect-[0.05]"
        } max-md:hidden`}
      />
    </div>
  </button>
);

/**
 * Props for the SocialIcon component.
 */
type SocialIconProps = {
  src: string;
  onClick: () => void;
};

/**
 * Renders a social media icon button.
 * @param {SocialIconProps} props - The props for the SocialIcon component.
 * @returns {JSX.Element} The rendered SocialIcon component.
 */
const SocialIcon: React.FC<SocialIconProps> = ({ src, onClick }) => (
  <button title="#" onClick={onClick}>
    <img
      src={src}
      alt="Social media icon"
      width={76}
      height={76}
      className="shrink-0 aspect-square w-[76px]"
    />
  </button>
);

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered Buy.
 */
function Buy(): JSX.Element {
  const [selectedPanda, setSelectedPanda] = React.useState<number>(2);

  const pandaCards = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/01fb7515-975b-46ee-b29b-3fbdf15c29ab?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      name: "Panda max",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f4b4762-faf9-4471-b29d-af9529d2f977?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      name: "Panda max",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dcb8d3da-4bd7-4ef4-9d93-6989169525bd?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      name: "Panda max",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9e286476-d9e0-432d-a3df-fbe255d2fc82?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      name: "Panda max",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fd70e6bd-14cd-472a-b0f0-97a9999ba349?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
      name: "Panda max",
    },
  ];

  /**
   * Handles the click event on a panda card.
   * @param {number} index - The index of the clicked panda card.
   */
  const handlePandaClick = (index: number) => {
    setSelectedPanda(index);
  };

  /**
   * Handles the click event on a navigation arrow.
   * @param {"left" | "right"} direction - The direction of the clicked arrow.
   */
  const handleNavigationClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSelectedPanda((prev) => (prev > 0 ? prev - 1 : pandaCards.length - 1));
    } else {
      setSelectedPanda((prev) => (prev < pandaCards.length - 1 ? prev + 1 : 0));
    }
  };

  /**
   * Handles the click event on the "Buy $PNDA" button.
   */
  const handleBuyClick = () => {
    console.log("Buy $PNDA clicked");
  };

  /**
   * Handles the click event on a social media icon.
   * @param {string} platform - The name of the clicked social media platform.
   */
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} icon clicked`);
  };

  return (
    <main className="flex flex-col justify-center">
      <section className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd43ff0f86f3857e11a2097f6864e07955561ed28c900722dac2b9155c90aa2?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="flex relative flex-col items-center pt-20 pb-10 w-full max-md:max-w-full">
          <header className="flex flex-col px-5 mt-8 max-w-full text-center w-[749px]">
            <h2 className="self-center text-2xl font-medium leading-6 bg-clip-text w-[429px] max-md:max-w-full">
              Unlocking game levels, and accessing exclusive in-game content.
            </h2>
            <h1 className="mt-7 text-3xl font-extrabold leading-10 text-white uppercase max-md:max-w-full">
              These tokens are your gateway to minting playable characters.
            </h1>
          </header>
          <nav className="flex gap-5 justify-center items-center self-stretch px-5 mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <NavigationArrow
              direction="left"
              onClick={() => handleNavigationClick("left")}
            />
            {pandaCards.map((card, index) => (
              <React.Fragment key={index}>
                {index === selectedPanda ? (
                  <div className="flex flex-col self-stretch p-4 text-2xl tracking-widest leading-8 text-center text-white rounded-3xl shadow-lg bg-zinc-800 bg-opacity-90">
                    <Image
                      src={card.imageSrc}
                      alt={`Featured ${card.name} character`}
                      width={207}
                      height={207}
                      className="w-full aspect-square"
                    />
                    <div className="self-center mt-6">{card.name}</div>
                  </div>
                ) : (
                  <PandaCard
                    imageSrc={card.imageSrc}
                    name={card.name}
                    onClick={() => handlePandaClick(index)}
                  />
                )}
              </React.Fragment>
            ))}
            <NavigationArrow
              direction="right"
              onClick={() => handleNavigationClick("right")}
            />
          </nav>
          <button
            onClick={handleBuyClick}
            className="flex flex-col justify-center p-5 mt-7 text-lg leading-6 text-center rounded-3xl border border-yellow-700 border-solid"
          >
            <span className="bg-clip-text">Buy $PNDA</span>
          </button>
          <div className="flex gap-5 justify-center mt-7">
            <SocialIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8dfcf1d71b38461e566bf06e23d8dc0ad067028f3638f69fcbae6ebd8c36d0?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
              onClick={() => handleSocialClick("Social Platform 1")}
            />
            <SocialIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea70bf5c92de77dc37858e51979c6e79602803b917ed160627cb2b377eda4056?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
              onClick={() => handleSocialClick("Social Platform 2")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Buy;

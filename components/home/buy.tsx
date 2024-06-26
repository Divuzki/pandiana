/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";

// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Props for the PandaCard component.
 */
type PandaCardProps = {
  imageSrc: string;
  name: string;
  onClick: () => void;
  isActive?: boolean;
};

/**
 * Renders a card displaying a panda character.
 * @param {PandaCardProps} props - The props for the PandaCard component.
 * @returns {JSX.Element} The rendered PandaCard component.
 */
const PandaCard: React.FC<PandaCardProps> = ({
  imageSrc,
  name,
  onClick,
  isActive,
}) => (
  <button
    onClick={onClick}
    className={`panda-card ${isActive ? "scale-105" : ""}`}
  >
    <Image
      src={imageSrc}
      alt={`${name} character`}
      width={207}
      height={207}
      className="object-cover w-[207px] rounded-2xl"
    />
    <div className="mt-4">{name}</div>
  </button>
);

/**
 * Props for the NavIcon component.
 */
type NavIconProps = {
  src: string;
  onClick: () => void;
};

/**
 * Renders a navigation icon button.
 * @param {NavIconProps} props - The props for the NavIcon component.
 * @returns {JSX.Element} The rendered NavIcon component.
 */
const NavIcon: React.FC<NavIconProps> = ({ src, onClick }) => (
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
      imageSrc: "/images/panda.jpeg",
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
      <section className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px]d py-4 max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd43ff0f86f3857e11a2097f6864e07955561ed28c900722dac2b9155c90aa2?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          alt="Background image"
          layout="fill"
          className="absolute inset-0 object-cover w-full h-full z-[-1]"
        />
        <div className="flex relative flex-col items-center pt-20 pb-10 w-full max-md:max-w-full">
          <div className="flex flex-col px-5 max-w-full text-center w-[749px]">
            <h2 className="self-center text-2xl font-medium leading-6 bg-clip-text w-[429px] max-md:max-w-full">
              Unlocking game levels, and accessing exclusive in-game content.
            </h2>
            <h1 className="mt-7 text-3xl font-monument font-extrabold text-white uppercase max-md:max-w-full">
              These tokens are your gateway to minting playable characters.
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            modules={[Navigation, Pagination]}
            wrapperClass="!m-auto !mt-5"
            className="!flex gap-5 justify-center items-center self-stretch !px-5 mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
          >
            {Array(10)
              .fill(pandaCards[0])
              .map((card, index) => (
                <SwiperSlide key={index} className="!w-max">
                  {index === selectedPanda ? (
                    <PandaCard
                      isActive
                      imageSrc={card.imageSrc}
                      name={card.name}
                      onClick={() => handlePandaClick(index)}
                    />
                  ) : (
                    <PandaCard
                      imageSrc={card.imageSrc}
                      name={card.name}
                      onClick={() => handlePandaClick(index)}
                    />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            onClick={handleBuyClick}
            className="flex flex-col justify-center default-bg-gradient p-5 mt-7 text-lg leading-6 text-center rounded-3xl border border-yellow-700 border-solid"
          >
            <span className="font-monument font-extrabold">Buy $PNDA</span>
          </button>
          <div className="flex gap-5 justify-center mt-7">
            <NavIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8dfcf1d71b38461e566bf06e23d8dc0ad067028f3638f69fcbae6ebd8c36d0?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
              onClick={() => handleSocialClick("Social Platform 1")}
            />
            <NavIcon
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

import React from "react";
import Image from "next/image";

/**
 * Props for the RoadmapItem component.
 */
type RoadmapItemProps = {
  title: string;
  description: string;
};

/**
 * Represents a single item in the roadmap.
 * @param {RoadmapItemProps} props - The properties for the roadmap item.
 * @returns {JSX.Element} A section element containing the roadmap item.
 */
const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, description }) => (
  <section className="flex flex-col grow px-12 py-10 w-full text-2xl text-center uppercase border border-teal-900 border-solid backdrop-blur-[17px] bg-neutral-900 bg-opacity-50 rounded-[40px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <h3 className="self-center tracking-wider bg-clip-text leading-[133%]">
      {title}
    </h3>
    <p className="mt-8 leading-8 text-white max-md:max-w-full">{description}</p>
  </section>
);

/**
 * The main component representing the Pandiana Roadmap.
 * @returns {JSX.Element} The main component structure.
 */
const Roadmap: React.FC = () => {
  /**
   * Array of roadmap items to be displayed.
   */
  const roadmapItems: RoadmapItemProps[] = [
    {
      title: "Pandception",
      description:
        "The genesis of $PNDA tokens, minted on the Solana blockchain",
    },
    {
      title: "Pandacubation",
      description:
        "Strengthening our roots and prepping for the first wave of players",
    },
    {
      title: "The Great Feast",
      description:
        "A pivotal moment where gameplay deepens and rewards multiply",
    },
    {
      title: "Sky",
      description:
        "Reaching our ultimate goals and setting new benchmarks in play-to-earn gaming",
    },
  ];

  return (
    <main className="flex flex-col justify-center">
      <section className="flex overflow-hidden relative flex-col justify-center w-full min-h-[967px] max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7ca208b22132b9cfd726889c567376459769a8df6da0884a5f1e4df6b0c952?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
          layout="fill"
          objectFit="cover"
          alt="Background"
          priority
        />
        <div className="flex relative flex-col p-20 w-full max-md:px-5 max-md:max-w-full">
          <header className="flex flex-col self-center mt-16 text-white max-md:mt-10 max-md:max-w-full">
            <h1 className="text-3xl font-extrabold leading-10 text-center uppercase max-md:max-w-full">
              PANDIANA Roadmap
            </h1>
            <h2 className="self-center mt-3.5 text-2xl font-medium leading-8">
              Our Bamboo Journey to the Top
            </h2>
          </header>
          <div className="flex flex-col flex-wrap content-start mx-4 mt-16 mb-14 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {roadmapItems.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <RoadmapItem {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {roadmapItems.slice(2).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <RoadmapItem {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;

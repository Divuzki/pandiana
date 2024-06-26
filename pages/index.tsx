import { Layout } from "@/components";
import { BelowBuy, Buy, Hero, Pandanomics, Roadmap } from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Buy />
      <BelowBuy />
      <Pandanomics />
      <Roadmap />
    </Layout>
  );
}

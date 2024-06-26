import { Layout } from "@/components";
import { BelowBuy, Buy, Hero, Pandanomics } from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Buy />
      <BelowBuy />
      <Pandanomics />
    </Layout>
  );
}

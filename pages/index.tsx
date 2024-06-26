import Image from "next/image";
import { Layout } from "@/components";
import { BelowBuy, Buy, Hero } from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Buy />
      <BelowBuy />
    </Layout>
  );
}

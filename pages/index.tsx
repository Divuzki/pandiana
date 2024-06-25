import Image from "next/image";
import { Layout } from "@/components";
import { Buy, Hero } from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Buy />
    </Layout>
  );
}

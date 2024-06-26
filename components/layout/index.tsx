import React from "react";
import Header from "./header";
import Footer from "./footer";
// import { Inter } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

// const inter = Inter({ subsets: ["latin"] });

const Layout = (props: Props) => {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

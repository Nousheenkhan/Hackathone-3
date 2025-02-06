

import CardData from "@/components/CardData";
import Editors from "@/components/Editors";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import TopHeader from "@/components/TopHeader";
import Universe from "@/components/Universe";


import Image from "next/image";

export default function Home() {
  return (
   <div>
     <TopHeader />
     <Header/>
     <Hero/>
     <Editors/>
     <Products/>
     <Universe/>
     <CardData/>
     <Footer/>

   </div>
  );
}

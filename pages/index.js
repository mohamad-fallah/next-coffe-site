import Slider from "@/components/template/Index/Slider";
import React from "react";
import About from "@/components/template/Index/About";
import Services from "@/components/template/Index/Services";
import Offer from "@/components/template/Index/Offer";

export default function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer/>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();

  return {
    props: {
      data: {
        services,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

import Anatomy from "@/components/organisms/nazwa/anatomy/Anatomy";
import Demo from "@/components/organisms/nazwa/demo/Demo";
import FAQ from "@/components/organisms/nazwa/faq/FAQ";
import Hero from "@/components/organisms/nazwa/hero/Hero";
import Impact from "@/components/organisms/nazwa/impact/Impact";
import LaunchEssentials from "@/components/organisms/nazwa/launch-essentials/LaunchEssentials";
import ProjectValues from "@/components/organisms/nazwa/project-values/ProjectValues";
import Quote from "@/components/organisms/nazwa/quote/Quote";
import React from "react";
import { Container } from "react-bootstrap";

const NazwaDlaFirmy = () => {
  return (
    <>
      <Hero />
      <Anatomy />
      <Impact />
      <Quote />
      <LaunchEssentials />
      <FAQ />
      <ProjectValues />
      <Demo />
    </>
  );
};

export default NazwaDlaFirmy;

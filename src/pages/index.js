import React, { useState } from "react";
import HeroSection from "../components/new_components/HeroSection";
import MainSection from "../components/new_components/MainSection";
import { mainSectionData } from "../components/new_components/MainSection/data";
import _ from "lodash";

const Home = () => {
  /* TODO
   * Add navbar (in app?)
   * Add hero section
   * Add main page sections
   * Add footer (in app?)
   */
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const mainSections = _.map(mainSectionData, (data) => {
    return <MainSection {...data} key={data.key} />;
  });

  return (
    <>
      <HeroSection />
      {mainSections}
    </>
  );
};

export default Home;

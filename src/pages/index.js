import React from "react";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import { mainSectionData } from "../components/MainSection/home-data";
import _ from "lodash";

const Home = () => {
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

import React from "react";
import { HeaderAppBar } from "./HeaderAppBar";
import { SecondaryHeaderAppBar } from "./SecondaryHeaderAppBar";
import { OurPrograms } from "./OurPrograms";
import { Hero } from "./Hero";

export const Layout = () => {
  return (
    <>
      <HeaderAppBar />
      <SecondaryHeaderAppBar />
      <Hero />
      <OurPrograms />
    </>
  );
};

import React from "react";
import { HeaderAppBar } from "./HeaderAppBar";
import { SecondaryHeaderAppBar } from "./SecondaryHeaderAppBar";
import { JoinTheMovement } from "./JoinTheMovement";

export const Layout = () => {
  return (
    <>
      <HeaderAppBar />
      <SecondaryHeaderAppBar />
      <JoinTheMovement />
    </>
  );
};

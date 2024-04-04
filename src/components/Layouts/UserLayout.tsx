import { Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";

export const UserLayout = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

import { Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";

export const AdminLayout = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

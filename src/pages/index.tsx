import React from "react";
import { Typography } from "@mui/material";
import { getUserLayout } from "@/components/Layouts/UserLayout";

const Home = () => {
  return (
    <>
      <Typography variant="h1" component="h2" textAlign={"center"}>
        Users
      </Typography>
    </>
  );
};
Home.getLayout = getUserLayout;

export default Home;

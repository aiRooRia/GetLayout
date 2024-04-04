import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { UserLayout } from "@/components/Layouts/UserLayout";

const Home = () => {
  return (
    <>
      <Typography variant="h1" component="h2" textAlign={"center"}>
        Users
      </Typography>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Home;

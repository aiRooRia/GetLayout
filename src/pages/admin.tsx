import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { AdminLayout } from "@/components/Layouts/AdminLayout";

const Admin = () => {
  return (
    <>
      <Typography variant="h1" component="h2" textAlign={"center"}>
        Admin
      </Typography>
    </>
  );
};
Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
